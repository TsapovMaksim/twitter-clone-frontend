import { FC } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';

import SearchIcon from '@material-ui/icons/SearchOutlined';

import { SearchTextField } from '@components/SearchTextField';
import SideMenu from '@components/SideMenu';
import RandomUsers from '@components/RandomUsers';

import { useStyles } from './Home/styles';

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  const styles = useStyles();
  return (
    <Container className={styles.wrapper} component="section" maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item sm={1} md={3}>
          <SideMenu />
        </Grid>
        <Grid item sm={8} md={6}>
          {children}
        </Grid>
        <Grid item sm={3} md={3}>
          <div className={styles.rightSide}>
            <SearchTextField
              variant="outlined"
              placeholder="Поиск по Твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            {/* <Tags /> */}
            <RandomUsers />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
