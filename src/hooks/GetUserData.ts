import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase/Config'

const GetUserData = ( uid:string ):any => {
    const [userData, setUserData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    // هوک دریافت داده های کاربر با ورودی آیدی 
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const ref = doc(db, 'users', uid);
                const docSnap = await getDoc(ref);

                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                } else {
                    throw new Error("The specified user doesn't exist.");
                }

                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setHasError(true);
            }
        }

        fetchData();
    }, [uid]);

    return { userData, isLoading, hasError };
}

export default GetUserData