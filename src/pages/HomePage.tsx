import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

const HomePage = () => {
  return (
    <div>
      {/* Typography */}
      <p style={typography.display_bd_72}>display_bd_72</p>
      <p style={typography.h1_bd_40}>h1_bd_40</p>
      <p style={typography.h1_sb_40}>h1_sb_40</p>
      <p style={typography.h2_bd_30}>h2_bd_30</p>
      <p style={typography.h3_bd_24}>h3_bd_24</p>
      <p style={typography.body1_rg_24}>body1_rg_24</p>
      <p style={typography.body2_bd_20}>body2_bd_20</p>
      <p style={typography.body3_bd_18}>body3_bd_18</p>
      <p style={typography.body4_rg_18}>body4_rg_18</p>
      <p style={typography.body5_rg_16}>body5_rg_16</p>
      <p style={typography.text1_rg_14}>text1_rg_14</p>

      {/* Color */}
      <p style={{ backgroundColor: themeVars.color.primary[100] }}>primary 100 — #7A64F9</p>
      <p style={{ backgroundColor: themeVars.color.primary[200] }}>primary 200 — #6250C7</p>
      <p style={{ backgroundColor: themeVars.color.primary[300] }}>primary 300 — #493C95</p>

      <p style={{ backgroundColor: themeVars.color.sub.lightblue_100 }}>
        sub lightblue_100 — #68CBEC
      </p>

      <p style={{ backgroundColor: themeVars.color.grayscale.white }}>grayscale white — #FFFFFF</p>
      <p style={{ backgroundColor: themeVars.color.grayscale[100] }}>grayscale 100 — #E6E6E6</p>
      <p style={{ backgroundColor: themeVars.color.grayscale[400] }}>grayscale 400 — #999999</p>
      <p style={{ backgroundColor: themeVars.color.grayscale[600] }}>grayscale 600 — #666666</p>
      <p style={{ backgroundColor: themeVars.color.grayscale[800] }}>grayscale 800 — #333333</p>
      <p style={{ backgroundColor: themeVars.color.grayscale[900] }}>grayscale 900 — #1A1A1A</p>
      <p style={{ backgroundColor: themeVars.color.grayscale[950] }}>grayscale 950 — #0D0D0D</p>
      <p style={{ backgroundColor: themeVars.color.grayscale.black }}>grayscale black — #000000</p>

      <p style={{ backgroundColor: themeVars.color.error.red_100 }}>error red_100 — #F96466</p>
      <p style={{ backgroundColor: themeVars.color.error.red_200 }}>error red_200 — #190A0A</p>
    </div>
  );
};

export default HomePage;
