import React, { createContext, useState } from 'react';

type ObjImageUpload = {
  file: File;
  url: string;
  params: string;
};

type ContextUploadType = {
  someStateImage: ObjImageUpload;
  someStateItems: ObjImageUpload;

  setSomeStateImage: React.Dispatch<React.SetStateAction<ObjImageUpload>>;
  setSomeStateItems: React.Dispatch<React.SetStateAction<ObjImageUpload>>;
};

const UploadContext = createContext<ContextUploadType>({
  someStateImage: {
    file: {} as File,
    url: '',
    params: '',
  },
  someStateItems: {
    file: {} as File,
    url: '',
    params: '',
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSomeStateImage: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSomeStateItems: () => {},
});

type UploadContextProviderProps = {
  children: React.ReactNode;
};

const UploadContextProvider: React.FC<UploadContextProviderProps> = ({
  children,
}) => {
  const [someStateImage, setSomeStateImage] = useState<ObjImageUpload>({
    file: {} as File,
    url: '',
    params: '',
  });
  const [someStateItems, setSomeStateItems] = useState<ObjImageUpload>({
    file: {} as File,
    url: '',
    params: '',
  });

  return (
    <UploadContext.Provider
      value={{
        someStateImage,
        someStateItems,
        setSomeStateImage,
        setSomeStateItems,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};

export { UploadContext, UploadContextProvider };
