import React, { useEffect, useRef } from 'react';
import Quagga from 'quagga';

const BarcodeScanner = ({ onDetected, height, width }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const initQuagga = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
        });
        videoRef.current.srcObject = stream;
        Quagga.init(
          {
            inputStream: {
              type: 'LiveStream',
              constraints: {
                width: height,
                height: width,
                facingMode: 'environment',
              },
            },
            locator: {
              halfSample: true,
              patchSize: 'large',
            },
            numOfWorkers: 4,
            decoder: {
              readers: ['code_128_reader'],
            },
            locate: true,
            multiple: true,
          },
          function (err) {
            if (err) {
              return console.log(err);
            }
            Quagga.start();
          }
        );
        Quagga.onDetected(handleDetected);
      } catch (error) {
        console.error(error);
      }
    };

    const handleDetected = (result) => {
      onDetected(result);
    };

    initQuagga();

    return () => {
      Quagga.offDetected(handleDetected);
    };
  }, [height, onDetected, width]);

  return <video ref={videoRef} id="interactive" className="viewport" />;
};

export default BarcodeScanner;
