import TemplatePointers from "./components/TemplatePointers"
import half from "../../assets/halflogo.png"


function LandingIntro(){

    return(
        <div className="hero min-h-full rounded-l-xl bg-base-200">
            <div className="hero-content py-12">
              <div className="max-w-md">

              <h1 className='text-3xl text-center font-bold '><img src={half} className="w-12 inline-block mr-2 mask mask-circle" alt="dashwind-logo" />AAA SWITCH GEAR</h1>

                <div className="text-center mt-12"><img src={half} alt="Dashwind Admin Template" className="w-48 inline-block"></img></div>
              
              {/* Importing pointers component */}
              {/* <TemplatePointers /> */}
              
              </div>

            </div>
          </div>
    )
      
  }
  
  export default LandingIntro