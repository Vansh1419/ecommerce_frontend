import { Typography, Box } from "@mui/material";
import { positioningCentreWithFlex } from "../../../common/styles/PositioningStyles";
import { paymentPartners } from "../../FooterData";
import { wrappingThroughFlex } from "./PaymentPartnerStyle";

const PaymentPartner = () => {
  const datas = paymentPartners;
  return (
    <Box>
      <Typography p={2} variant="h5">
        Payment Partner
      </Typography>
      <Box
        sx={{
          ...wrappingThroughFlex()
        }}
      >
        {datas.map((data, index) => {
          return (
            <Box
              key={index}
              sx={{
                height: "60px",
                width: "98px",
                border: "1px solid #eaeaea",
                m: 1,
                ...positioningCentreWithFlex(),
              }}
            >
              {data.partnerLink ? (
                <img
                  width={"60px"}
                  src={data.partnerLink}
                  alt={data.partnerAlt}
                />
              ) : (
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#666",
                    ...positioningCentreWithFlex(),
                  }}
                >
                  {data.partnerAlt}
                </Typography>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default PaymentPartner;
