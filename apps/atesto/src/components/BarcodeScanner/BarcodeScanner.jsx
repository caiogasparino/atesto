// import { useEffect } from 'react';
// import { Html5QrcodeScanner } from 'html5-qrcode';
// import { Html5QrcodeScannerStrings } from 'html5-qrcode/esm/strings';

// export default function BarcodeScanner({
//   qrCodeSuccessCallback,
//   qrCodeErrorCallback,
// }) {
//   useEffect(() => {
//     const init = () => {
//       let html5QrcodeScanner = new Html5QrcodeScanner(
//         'reader',
//         { fps: 10, qrbox: { width: 250, height: 250 } },
//         /* verbose= */ true
//       );

//       html5QrcodeScanner.render(qrCodeSuccessCallback, qrCodeErrorCallback);

//       Html5QrcodeScannerStrings.cameraPermissionTitle = function () {
//         return 'Solicitar permissão de camera';
//       };
//       Html5QrcodeScannerStrings.textIfCameraScanSelected = function () {
//         return 'Digitalizar um arquivo';
//       };
//       Html5QrcodeScannerStrings.scanButtonStopScanningText = function () {
//         return 'Pare de escanear';
//       };

//       Html5QrcodeScannerStrings.scanButtonStartScanningText = function () {
//         return 'Iniciar de escaner';
//       };
//     };

//     init();
//   }, [qrCodeErrorCallback, qrCodeSuccessCallback]);
//   return <div id="reader" width="600px"></div>;
// }
