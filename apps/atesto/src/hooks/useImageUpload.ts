import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { environment } from '../environments/environment';
import { setStoreAttestId } from '../store/attestIdSlice';

interface ImageUploadResult {
  success: boolean;
  url?: string;
}

export const initialState: ImageUploadResult = {
  success: false,
  url: '',
};

export const useImageUpload = () => {
  const dispatch = useDispatch();
  const [updateResult, setUpdateResult] =
    useState<ImageUploadResult>(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>('');

  const uploadImage = async (file: File, nameData: string, path: string) => {
    const formData = new FormData();
    formData.append(`${nameData}`, file);
    try {
      setLoading(true);
      fetch(`${environment.url}/${path}`, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.blob())
        .then((blob) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const reader: any = new FileReader();
          reader.onloadend = () => {
            const base64data = reader.result;
            // Use the base64 data as needed
            if (path === 'imagemDaNota') {
              dispatch(
                setStoreAttestId({
                  imagemInvoicebase64: base64data,
                })
              );
            } else {
              dispatch(
                setStoreAttestId({
                  imagemItemsbase64: base64data,
                })
              );
            }
            console.log(
              'responseresponseresponseresponseresponseresponseresponse',
              base64data
            );
          };
          reader.readAsDataURL(blob);
        })
        .catch((error) => console.error(error));

      const data = await fetch(`${environment.url}/${path}`, {
        method: 'POST',
        body: formData,
      });
      if (data.ok) {
        setLoading(false);
        setUpdateResult({ success: data.ok, url: data.url });
      }
    } catch (err) {
      setLoading(false);
      setError(err);
      console.log('ERROR', err);
    }
  };

  return { error, setUpdateResult, loading, uploadImage, updateResult };
};
