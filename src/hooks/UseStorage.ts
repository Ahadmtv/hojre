import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useEffect, useState } from 'react'
import { storage } from '../firebase/Config';
import { useAppDispatch } from '../Redux/hooks';
import { setLoading } from '../Redux/authSlice';

const UseStorage = (file: any, uid: string) => {
    const [url, setUrl] = useState("");
    const dispatch=useAppDispatch();

    useEffect(() => {
        if (file && uid) {
            dispatch(setLoading(true));
            const avatarRef = ref(storage, "/avatars" + file.name + uid);
            const uploadTask = uploadBytesResumable(avatarRef, file);

            uploadTask.on("state_changed", (snapShot) => {

            },
                (err) => {

                },
                async () => {

                    //دریافت آدرس فایل آپلود شده
                    const downloadURL = await getDownloadURL(avatarRef);
                    setUrl(downloadURL);
                    dispatch(setLoading(false));
                }
            )
        }

    }, [file, uid,dispatch]);
    return { url };
}

export default UseStorage