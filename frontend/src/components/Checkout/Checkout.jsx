import {
  Drawer,
  Stack,
  Typography,
  Button,
  ButtonGroup,
  Grid,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

function Checkout({ openDrawer, handleDrawerClose, anchor }) {
  return (
    <Drawer open={openDrawer} onClose={handleDrawerClose} anchor={anchor}>
      <Stack
        width={{ md: "360px", xs: "100vw" }}
        height="100%"
        justifyContent="space-between"

        alignItems="space-between"
      >
        <Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            padding={3}

          >
            <Typography variant="h5" fontWeight={700}>
              My Cart
            </Typography>
            <Button size="small" onClick={handleDrawerClose}>
              <CloseRoundedIcon />
            </Button>
          </Stack>
          <Stack  border="1px solid lightgrey">
            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-start"
              padding={2}
              marginTop={2}
            >
              <img
                style={{
                  width: "72px",
                  height: "72px",
                  border: "1px solid lightgrey",
                  borderRadius: "4px",
                }}
                src="https://cdn.grofers.com/app/images/products/sliding_image/10491a.jpg"
                alt="product"
              />
              <Stack flex={1}>
                <Typography>
                  Nestle Milkmaid Sweetened Condensed Milk
                </Typography>
                <Typography variant="subtitle2" color="GrayText">
                  380 g
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  padding={2}
                  alignItems="center"
                >
                  <Typography variant="subtitle1" fontWeight="700">
                    ₹139
                  </Typography>
                  <ButtonGroup variant="contained" color="success">
                    <Button>
                      <RemoveRoundedIcon fontSize="14px" />
                    </Button>
                    <Button disableRipple>{1}</Button>
                    <Button>
                      <AddRoundedIcon fontSize="14px" />
                    </Button>
                  </ButtonGroup>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Grid container  padding={2} border="1px solid lightgrey">
            <Grid item xs={6}>
              <Typography variant="body2" color="#919191">
                MRP
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign="end" variant="body2" color="#919191">
                ₹840
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2" fontWeight="bold">
                Grand total
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign="end" variant="subtitle2" fontWeight="bold">
                ₹840
              </Typography>
            </Grid>
          </Grid>

          <Button
            sx={{ justifyContent: "space-between", margin: "10px" }}
            color="success"
            variant="contained"
          >
            <Grid item direction="row" display="flex" alignItems="center">
              <Typography variant="subtitle2" fontWeight="bold">
                7 items
              </Typography>
              <Typography variant="h4" margin={0.5}>
                ·
              </Typography>
              <Typography variant="subtitle2" fontWeight="bold">
                ₹840
              </Typography>
            </Grid>
            <Grid item display="flex" alignItems="center">
              <Typography variant="h6" paddingTop={0.25} fontWeight="bold">
                Proceed
              </Typography>
              <ArrowForwardIosRoundedIcon />
            </Grid>
          </Button>
        </Stack>
      </Stack>
    </Drawer>
  );
}

export default Checkout;
