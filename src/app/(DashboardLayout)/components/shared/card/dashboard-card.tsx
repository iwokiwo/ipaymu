/**
 * @author I Wayan Bayu Nugroho
 * @email iwokiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */


import React from "react";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";

import { colors } from "@/asset";
import {isEmpty} from "lodash";

type Props = {
  title?: any;
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  cardheading?: string | JSX.Element;
  headtitle?: string | JSX.Element;
  headsubtitle?: string | JSX.Element;
  children?: JSX.Element;
  middlecontent?: string | JSX.Element;
  backgroundColor?: string
};

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent, backgroundColor
}: Props) => {
  return (
      <Card sx={{ padding: 0, backgroundColor: backgroundColor }} elevation={9}>
      {cardheading ? (
        <CardContent>
          <Typography variant="h6">{headtitle}</Typography>
          <Typography variant="subtitle2" color={isEmpty(backgroundColor) ? "textSecondary":"#ffff"}>
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: "10px" }}>
          {title ? (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems={"center"}
              mb={3}
            >
              <Box>
                {title ? <Typography variant="subtitle2" color={isEmpty(backgroundColor) ? "textSecondary":"#ffff"}>{title}</Typography> : ""}

                {subtitle ? (
                  <Typography variant="subtitle2" color={isEmpty(backgroundColor) ? "textSecondary":"#ffff"}>
                    {subtitle}
                  </Typography>
                ) : (
                  ""
                )}
              </Box>
              {action}
            </Stack>
          ) : null}

          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;
