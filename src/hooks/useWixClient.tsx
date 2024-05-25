"useclient"

import { WixClientContext } from "@/context/wixContext"
import { useContext, useEffect } from "react"

const useWixClient = () => {


  return useContext(WixClientContext)
}

export default useWixClient