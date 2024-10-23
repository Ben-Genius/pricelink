import cta from "../../assets/cta.png";

export default function CTA() {
    return (
      <div className="">
        <div className="mx-auto max-w-7xl sm:px-6 sm:py-12 lg:px-8">
          <div className="relative isolate overflow-hidden bg-purpleCustom/90 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#8B5CF6-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#8B5CF6" />
                  <stop offset={1} stopColor="#FFFFFF" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
         
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
               PriceLink offers more
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              PriceLink allows you to find the best deals by comparing products across Amazon US and UK. Save money and shop smarter with us.
              </p>
             
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt="App screenshot"
                src={cta}
                width={1824}
                height={1080}
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 object-contain object-top"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  