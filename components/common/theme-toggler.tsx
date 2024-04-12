import { FunctionComponent } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'app/features/settingsSlice';
import { AppDispatch, RootState } from 'app/store';
import { Theme } from 'types/theme';
import styles from './theme-toggler.module.scss';

const ThemeToggler: FunctionComponent = () => {
  const theme: Theme = useSelector((state: RootState) => state.settings.theme);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className={styles['theme-toggler']}>
      {theme === Theme.Dark ? (
        <HiSun
          className={styles.icon}
          onClick={() => dispatch(setTheme(Theme.Light))}
          title={`Switch to ${Theme.Light} mode`}
          role="img"
          aria-hidden="true"
        />
      ) : (
        <HiMoon
          className={styles.icon}
          onClick={() => dispatch(setTheme(Theme.Dark))}
          title={`Switch to ${Theme.Dark} mode`}
          role="img"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default ThemeToggler;
