import WebApp from "@twa-dev/sdk";
import "./style.scss";

export default function QrCode() {
  const savedData = sessionStorage.getItem("pixelcoinLangpack");
  const parsedData = JSON.parse(savedData);
  return (
    <>
      <div className="_root_pl5tv_1">
        <div className="_root_1ctq4_1 _typeface-title-0_1ctq4_164 _align-center_1ctq4_14">
          {parsedData.qr_code.desktop_is_boring}
          <br />
          {parsedData.qr_code.play_on_your_mobile}
        </div>
        <div className="_qrCodeImg_pl5tv_10"></div>
      </div>
    </>
  );
}
