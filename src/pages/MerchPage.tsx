import MerchSection from "components/MerchSection/MerchSection";
import { motion } from "framer-motion/dist/framer-motion";
import * as S from "./MerchPage.styles";
import Lottie from "react-lottie";
import { merchPageLottieOptions } from "utility/LottieOptions";
import { NewlineText } from "utility/Helpers";

const MerchPage = () => {
  return (
    <S.MerchPage id="merchPageTop">
      <S.MerchPageHeader>
        <S.MerchPageHeaderItem>
          <S.LottieDiv>
            <Lottie options={merchPageLottieOptions} />
          </S.LottieDiv>
        </S.MerchPageHeaderItem>
        <S.MerchPageHeaderItem>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            {NewlineText("Our Products")}
            <br />
            <h1 className="thiccSubheading thiccSubheading--gradient">
              Get in style with Tech Start!
            </h1>
          </motion.div>
        </S.MerchPageHeaderItem>
      </S.MerchPageHeader>

      <MerchSection />
    </S.MerchPage>
  );
};

export default MerchPage;
