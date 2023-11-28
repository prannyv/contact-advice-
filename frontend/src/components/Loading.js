import React from "react";
import "./Loading.css";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export const Loading = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 8000);
    }, []);

    const loadDifferentPage = () => {

    }

    return (
        <div className="w-screen h-screen fixed inset-0 z-100">
            {
                loading ?
                    <>
                        <ClipLoader
                         size={150}
                         color={"#E9985E"}
                         loading={this.state.loading}
                         />
                    </>
                :
                    <>
                    </>
            }
        </div>
    );
};
