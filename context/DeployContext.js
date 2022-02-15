import React, { useEffect, useState } from 'react'
import { contractABI, contractAddress } from '../lib/constants'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'

export const Context = React.createContext()

let eth

if (typeof window !== 'undefined') {
    eth = window.ethereum
}


export const DeployProvider = ({ children }) => {

    useEffect(() => {
        getEthereumContract();
    }, []);


    const [currentContractVal, setCurrentContractVal] = useState(null);
    const [contract, setContract] = useState(null);
    const [loading, SetLoading] = useState(false);
    const [title, SetTitle] = useState();

    const getEthereumContract = () => {
        if(!window.ethereum) return
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const data = new ethers.Contract(
            contractAddress,
            contractABI,
            signer,
        )

        setContract(data);
    }

    console.log("akhil",contract)
    
    const setHandler = (event) => {
        event.preventDefault();
        console.log('sending ',title);
        if(title) return contract.set(title);
    }

    const getCurrentVal = async () => {
        SetLoading(true)
		let val = await contract.get();
		setCurrentContractVal(val);
        SetLoading(false)
	}



    return (
        <Context.Provider
            value={{
                SetTitle,
                title,
                setHandler,
                getCurrentVal,
                currentContractVal,
                loading
            }}
        >
            {children}
        </Context.Provider>
    )
}