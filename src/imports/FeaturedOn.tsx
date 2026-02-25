import svgPaths from "./svg-ob41a2ax22";

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6.903px] relative shrink-0" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[13.806px] text-center text-white tracking-[3.3135px] uppercase">FEATURED IN</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center mb-[-0.69px] relative shrink-0" data-name="Container">
      <Container1 />
    </div>
  );
}

function Component() {
  return (
    <div className="h-[64.199px] relative shrink-0 w-[140.823px]" data-name="1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.823 64.1989">
        <g id="1">
          <path clipRule="evenodd" d={svgPaths.p39907400} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="h-[64.199px] relative shrink-0 w-[140.823px]" data-name="2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.823 64.1989">
        <g id="2">
          <path clipRule="evenodd" d={svgPaths.p599d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Forbes-logo (Traced)" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[64.199px] relative shrink-0 w-[140.823px]" data-name="3">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.823 64.1989">
        <g id="3">
          <path clipRule="evenodd" d={svgPaths.pcd1b300} fill="var(--fill-0, white)" fillRule="evenodd" id="Entrepreneur_(magazine)_logo_2012 (Traced)" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="h-[64.199px] relative shrink-0 w-[140.823px]" data-name="4">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.823 64.1989">
        <g id="4">
          <path clipRule="evenodd" d={svgPaths.p2e775200} fill="var(--fill-0, white)" fillRule="evenodd" id="1200px-Fox_Business_Logo (Traced)" />
        </g>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="h-[64.199px] relative shrink-0 w-[140.823px]" data-name="5">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.823 64.1989">
        <g id="5">
          <path clipRule="evenodd" d={svgPaths.p250d0100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component5() {
  return (
    <div className="h-[64.199px] relative shrink-0 w-[140.823px]" data-name="6">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.823 64.1989">
        <g id="6">
          <path clipRule="evenodd" d={svgPaths.p1b5c1480} fill="var(--fill-0, white)" fillRule="evenodd" id="CBS_logo (Traced)" />
        </g>
      </svg>
    </div>
  );
}

function Cred() {
  return (
    <div className="content-stretch flex items-center mb-[-0.69px] relative shrink-0" data-name="cred">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
}

export default function FeaturedOn() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[0.69px] px-[200px] relative size-full" data-name="featured on">
      <Container />
      <Cred />
    </div>
  );
}