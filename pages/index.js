import React, { useState, useEffect } from "react";
import Header from "../components/header"
import Form from "../components/form"

export default function Home() {

  const [Account, setAccount] = useState("");

  const wallet = async () => {
    const { ethereum } = window

    if (!window.ethereum) {
      alert("Please install metamask")

    } else {

      try {
        if (!window.ethereum) return
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        console.log("we found an address", accounts[0])
        setAccount(accounts[0])


      } catch (err) {

      }

    }

  }

  useEffect(() => {
    walletConnect()
  }, [Account.length])

  const walletConnect = async () => {

    const { ethereum } = window

    if (!ethereum) {
      console.log("Please install metamask")

    } else {
      console.log("wallet exists! ")
    }
    if (!window.ethereum) return
    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const acc = accounts[0]
      console.log("mm", acc)
      setAccount(acc)

    } else {
      console.log("No account found")
    }

  }


  return (
    <>


      <div className="h-screen w-full object-contain relative overflow-hidden">

        <video className="w-[100%] h-screen object-cover absolute backdrop-blur-sm	" src="vid.mp4" autoPlay="vid.mp4" loop muted></video>

        <div className=" backdrop-blur-3xl  w-full h-screen z-[-9]">




          {Account ? (
            <>
              <div>

                <Header user={Account}/>

              </div>

              <div>

                <Form />

              </div>

            </>
          ) :
            (
              <>

                <div className="absolute top-[35%] left-[24%] w-[50%]">

                  <h5 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600 text-center uppercase">Connect Wallet</h5>

                  <button className="bg-gradient-to-r  from-pink-600 to-purple-700 text-white font-bold w-[50%] p-[15px] ml-[25%] rounded-full mt-[30px]  text-2xl" onClick={wallet}>Connect Now</button>

                </div>

              </>
            )

          }
        </div>


      </div>


    </>

  )
}
