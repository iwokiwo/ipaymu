/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import React from "react";
import {Box, Button, Card, CardActions, CardContent, Collapse, Stack, TextField, Typography} from '@mui/material';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import {Search} from "@mui/icons-material";
import {useTranslation} from "react-i18next";


interface TableToolbarProps {
    numSelected: number;
    onSearch: () => void
    children?: JSX.Element | JSX.Element[];
  }

  const TableToolbar: React.FC<TableToolbarProps> = (props: TableToolbarProps)  => {
      const { t } = useTranslation()
    const { numSelected, onSearch, children } = props;

    const [show, setShow] = React.useState(false)
  
    return (
      <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Nutrition
          </Typography>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton
                onClick={() => {
                    setShow(!show)
                }}
            >
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
          <Collapse in={show} timeout="auto" unmountOnExit>
          <Box sx={{p: 2}}>
          <Card sx={{p: 1}}>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      {t('common.search')}
                  </Typography>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2} useFlexGap  flexWrap="wrap">
                      {children}
                  </Stack>
              </CardContent>
              <CardActions
                  sx={{
                      alignSelf: "stretch",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                      // 👇 Edit padding to further adjust position
                      p: 0,
                      mt: 2
                  }}
              >
                  <Button
                      size={"small"}
                      variant={"outlined"}
                      startIcon={<Search />}
                      onClick={()=> onSearch() }
                  >
                      {t('common.search')}
                  </Button>
              </CardActions>
          </Card>
          </Box>
          </Collapse>
      </>
    );
  }
  export default TableToolbar;