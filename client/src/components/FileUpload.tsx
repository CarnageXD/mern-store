import React, {ChangeEvent, useRef} from 'react';

interface IUploadFile {
    setFile: Function,
    accept: string,
}

export const FileUpload: React.FC<IUploadFile> = ({setFile, accept, children}) => {
    const ref = useRef<any>()

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setFile(e.target.files[0])
    }

    return (
        <div onClick={() => ref.current.click()}>
            {children}
        </div>
    );
};

export default FileUpload;