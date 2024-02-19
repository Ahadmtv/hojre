import { doc, getDoc } from 'firebase/firestore'
import React, { FC, useEffect, useState } from 'react'
import { db } from '../firebase/Config'

const GetUserData = ( uid:string ):any => {
    const [userData, setUserData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

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
                console.error('An error occurred while fetching the user document: ', error);
                setIsLoading(false);
                setHasError(true);
            }
        }

        fetchData();
    }, [uid]);

    return { userData, isLoading, hasError };
}

export default GetUserData