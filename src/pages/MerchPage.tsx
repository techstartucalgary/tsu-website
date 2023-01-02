import MerchSection from "components/MerchSection/MerchSection";
import { motion } from "framer-motion/dist/framer-motion";
import * as S from "./MerchPage.styles";

const MerchPage = () => {
  return (
    <S.MerchPage id="teamPageTop">
      <S.MerchPageHeader>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Check out our exclusive Tech Start merch!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        ></motion.div>
      </S.MerchPageHeader>
      <MerchSection />
    </S.MerchPage>
  );
};

export default MerchPage;
