import Web3 from 'web3/dist/web3.min.js';
import ippg_abi  from './abi/ippg_abi.json'
import fil_abi from './abi/fil_abi.json'

export const web3 = (window.ethereum && new Web3(window.ethereum)) || null

let ippg_token='0x5E23444EE0CD04209AFc353c0A66880c996245d0'

let fil_token = '0x5200C0dd2Fe1D0FB73b29a7abE4EC23252F680Dc'

const ippg_contract = new web3.eth.Contract(ippg_abi,ippg_token)

const fil_contract = new web3.eth.Contract(fil_abi,fil_token)

export{
    ippg_contract,
    fil_contract,
    fil_token,
    ippg_token
}
