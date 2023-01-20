import React from "react";
import { FooterImportantLinks } from "../../FooterData";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { importantLinksStyle, importantLinkStyle } from "./ImportantLinksStyle";

const ImportantLinks = () => {
  const datas = FooterImportantLinks;
  return (
    <div>
      <Grid
        container
        sx={{
          ...importantLinksStyle(),
        }}
      >
        {datas.map((data, index) => {
          return (
            <Grid key={index} item xs={12} md={4}>
              <Typography variant="h5">{data.name}</Typography>
              <Grid
                key={index}
                container
                sx={{
                  mt: 1,
                  spacing: 2,
                }}
              >
                {data.dataOptions.map((dataOption, index) => {
                  return (
                    <Grid key={index} item xs={4}>
                      <Link
                        to={dataOption.optionLink}
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <Typography
                          href={dataOption.optionLink}
                          variant="subtitle1"
                          sx={{
                            ...importantLinkStyle(),
                          }}
                        >
                          {dataOption.optionName}
                        </Typography>
                      </Link>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ImportantLinks;
