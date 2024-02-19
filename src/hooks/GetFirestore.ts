import { useEffect, useState } from "react";
import { useAppDispatch } from "../Redux/hooks";
import { setLoading } from "../Redux/authSlice";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Config";

const GetFirestore = (type: string, id?: string) => {
    const [data, setData] = useState<any>();
    const dispath = useAppDispatch();
    useEffect(() => {
        dispath(setLoading(true));
        const docRef = doc(db, type, type);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const result: any[] = [];
                    Object.values(docSnap.data()).forEach((value: any) => {
                        result.push(value);
                    });
                    if (id) {
                        let filtered = result.filter(item => item.id === id);
                        setData(filtered[0])
                    } else {
                        setData(result);
                    }
                } else {
                    console.log('No such document!');
                }
            })
            .catch((error) => {
                console.error('Error getting document:', error);
            })
            .finally(() => {
                dispath(setLoading(false));
            })
    }, [type,id]);
    if (id) {

    }
    return { data }
}

export default GetFirestore