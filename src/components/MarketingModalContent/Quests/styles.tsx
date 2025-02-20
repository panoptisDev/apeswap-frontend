/** @jsxImportSource theme-ui */
import styled from 'styled-components'
import { ThemeUIStyleObject } from 'theme-ui'

export const Bubble = styled.div<{ isActive?: boolean }>`
  background: ${({ isActive, theme }) =>
    isActive ? 'linear-gradient(53.53deg, #a16552 15.88%, #e1b242 92.56%)' : theme.colors.white4};
  height: 8px;
  width: 8px;
  border-radius: 50px;
  margin: 0px 2.5px 0px 2.5px;
  cursor: pointer;
`
export const showApe = (slide, isDark): ThemeUIStyleObject => ({
  width: '100%',
  height: '230px',
  '@media screen and (min-width: 853px)': {
    height: '500px',
  },
  background: `url(images/marketing-modals/questApe-${isDark ? 'dark-' : 'light-'}${slide}.svg)`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
})

export const subtitle = (isDark): ThemeUIStyleObject => ({
  '@media screen and (max-width: 853px)': {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '12px',
    textAlign: 'left',
    color: isDark ? '#FAFAFA' : '#4D4040',
    opacity: 0.5,
  },
  '@media screen and (min-width: 853px)': {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '18px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: isDark ? '#FAFAFA' : '#4D4040',
    opacity: 0.5,
  },
})

export const styles: Record<string, ThemeUIStyleObject> = {
  container: {
    alignItems: 'flex-start',
    overflow: 'hidden',
    overflowY: 'auto',
    height: '508px',
    '@media screen and (min-width: 853px)': {
      width: '100%',
      minWidth: '800px',
      maxWidth: '800px',
      height: '500px',
    },
    flexWrap: 'wrap',
  },
  imagesWrapper: {
    width: '100%',
    '@media screen and (min-width: 853px)': {
      width: '380px',
    },
    justifyContent: 'center',
  },
  textWrapper: {
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    '@media screen and (min-width: 853px)': {
      padding: '110px 20px 0 30px',
      width: '420px',
      textAlign: 'start',
      justifyContent: 'flex-start',
    },
    flexWrap: 'wrap',
  },
  bubbleWrapper: {
    width: '100%',
    justifyContent: 'center',
    margin: '20px 0 15px',
    '@media screen and (min-width: 853px)': {
      justifyContent: 'flex-start',
      margin: '32px 0 20px 0',
    },
  },
  text: {
    width: '100%',
    '@media screen and (max-width: 853px)': {
      marginLeft: '30px',
      textAlign: 'left',
    },
  },
  title: {
    fontWeight: 700,
    '@media screen and (max-width: 853px)': {
      fontSize: '18px',
      lineHeight: '14px',
      marginTop: '20px',
      marginBottom: '5px',
    },
    '@media screen and (min-width: 853px)': {
      fontSize: '24px',
      lineHeight: '36px',
    },
  },
  first: {
    fontWeight: 700,
    fontSize: '10px',
    lineHeight: '14px',
    color: '#FFB300',
    '@media screen and (max-width: 853px)': {
      marginTop: '15px',
    },
    '@media screen and (min-width: 853px)': {
      fontWeight: 700,
      fontSize: '10px',
      lineHeight: '14px',
      color: '#FFB300',
      marginTop: '30px',
    },
  },
  second: {
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '14px',
    marginTop: '4px',
    '@media screen and (min-width: 853px)': {
      fontSize: '22px',
      marginTop: '7px',
    },
  },
  third: {
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: '15px',
    fontSize: '12px',
    '@media screen and (max-width: 853px)': {
      width: '220px',
    },
    '@media screen and (min-width: 853px)': {
      fontSize: '14px',
      lineHeight: '16px',
      flex: 'none',
      order: 1,
      alignSelf: 'stretch',
      flexGrow: 0,
    },
  },
  thirdWrapper: {
    '@media screen and (max-width: 853px)': {
      width: '230px',
      marginLeft: '30px',
      textAlign: 'left',
    },
    marginTop: '15px',
    width: '275px',
  },
  button: {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '24px',
    fontStyle: 'normal',
    '@media screen and (max-width: 853px)': {
      width: '222px',
      marginBottom: '20px',
    },
    paddingTop: '5px',
    paddingBottom: '5px',
  },
}
