import {React,useState} from "react";
import addbrandbutton from "../assets/add_brand.svg"
import Brand from "./Brand.component";
import AddBrandForm from "./AddBrandForm.component";


const AddBrand=()=>{
    const [brand,setBrand] = useState([])
    const [addbrandclicked, setaddbrandclicked] = useState(false)
    const addbrand = <div class="grid grid-cols-4      ml-[208px] mt-[100px] w-[1024px] gap-x-[25px]">
    <div class="w-[238px] h-[247px] pr-[0.30px] pt-[57px] pb-[4.55px] flex-col justify-end items-center inline-flex">
    <div class="w-[235px] h-[239px] pt-[57px] flex-col justify-end items-center inline-flex">
        <div class="flex-col justify-start items-start gap-[5px] inline-flex">
            <div class="w-[235px] h-[182.39px] px-[49.50px] pt-[32.44px] pb-[42.40px] bg-[#D9FFED] rounded-[17.54px] flex-col justify-start items-center gap-[7.01px] flex">
                <div class="w-[74.53px] h-[74.53px] relative flex-col justify-start items-start flex ">
                    <button type="submit" onClick={()=>{setaddbrandclicked(true)}}>
                    <img src={addbrandbutton} alt="" className="rotate-90"></img>
               </button>
                </div>
                <div class="opacity-80 text-zinc-800 text-[17.54px] leading-[26.31px] self-stretch font-medium ">Add new brand</div>
            </div>
        </div>
        </div>
    </div>
   <Brand></Brand>
   <Brand></Brand>
   <Brand></Brand>
     </div>
    return(
<div>
{addbrandclicked?<AddBrandForm></AddBrandForm>:addbrand}
</div>
)

}

export default AddBrand