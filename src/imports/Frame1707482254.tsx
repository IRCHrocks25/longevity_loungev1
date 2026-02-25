import svgPaths from "./svg-wutzeoxowk";
import imgTonyRobbins from "../assets/08f38c29b2d2ca08e050e7942cf8170e54499e6b.png";

function Icon() {
  return (
    <div className="h-[48px] opacity-40 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[12.5%] right-[18.75%] top-1/4" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 24">
          <path d={svgPaths.pf109b80} fill="var(--fill-0, #A28FB5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[48px] items-start left-[48px] pr-[752px] top-[48px] w-[800px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[59px] left-[47.71px] top-[237.46px] w-[554px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#845491] text-[18px] top-[0.5px] w-[547.434px] whitespace-pre-wrap">
        <span className="leading-[29.25px]">{`After spending time with leaders like `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[29.25px]">Tony Robbins and Sir Richard Branson</span>
        <span className="leading-[29.25px]">, one pattern became undeniable:</span>
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#2c3135] text-[20px] top-[-0.5px]">{`They don't treat health as a side conversation.`}</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#2c3135] text-[0px] text-[20px] top-[-0.5px]">
        <span className="leading-[28px]">{`They treat it as a `}</span>
        <span className="font-['Tinos:Italic',sans-serif] italic leading-[28px]">strategic priority.</span>
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[68px] items-start left-[48px] top-[320px] w-[800px]" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[rgba(143,169,181,0.3)] h-px left-[48px] top-[420px] w-[547px]" data-name="Container" />;
}

function Paragraph3() {
  return (
    <div className="absolute h-[28px] left-[48px] top-[457px] w-[800px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#2c3135] text-[18px] top-[-12px] w-[525.626px] whitespace-pre-wrap">This webinar is where Alessia shares how that mindset actually works.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white h-[533px] mr-[-39px] relative rounded-[32px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-[645px]" data-name="Container">
      <Container1 />
      <p className="absolute font-['Tinos:Italic',sans-serif] italic leading-[41px] left-[48px] text-[#2c3135] text-[30px] top-[108px] w-[581.867px] whitespace-pre-wrap">The most capable, driven people I knew were often the ones quietly putting their health last.</p>
      <Paragraph />
      <Container2 />
      <Container3 />
      <Paragraph3 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[39px] relative size-full">
      <Container />
      <div className="h-[614px] mr-[-39px] relative shrink-0 w-[575.348px]" data-name="tony robbins">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTonyRobbins} />
      </div>
    </div>
  );
}