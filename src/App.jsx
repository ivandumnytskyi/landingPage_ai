import { useState } from 'react'
import * as stylex from '@stylexjs/stylex'
import arrowRight from './assets/figma/desktop-imgArrowRight.svg'
import calendarDays from './assets/figma/desktop-imgCalendarDays.svg'
import calendarRange from './assets/figma/desktop-imgCalendarRange.svg'
import check from './assets/figma/desktop-imgCheck.svg'
import checkSmall from './assets/figma/desktop-imgCheck2.svg'
import customerPortrait from './assets/figma/desktop-imgCustomerPortrait.png'
import figmaIcon from './assets/figma/desktop-imgFigma.svg'
import fileText from './assets/figma/desktop-imgFileText.svg'
import githubIcon from './assets/figma/desktop-imgGithub.svg'
import liveDot from './assets/figma/desktop-imgLiveDot.svg'
import listChecks from './assets/figma/desktop-imgListChecks.svg'
import lock from './assets/figma/desktop-imgLockKeyhole.svg'
import messages from './assets/figma/desktop-imgMessagesSquare.svg'
import minus from './assets/figma/desktop-imgMinus.svg'
import panelTop from './assets/figma/desktop-imgPanelTop.svg'
import play from './assets/figma/desktop-imgPlay.svg'
import plus from './assets/figma/desktop-imgPlus.svg'
import refresh from './assets/figma/desktop-imgRefreshCw.svg'
import route from './assets/figma/desktop-imgRoute.svg'
import sparkles from './assets/figma/desktop-imgSparkles.svg'
import taskStatus from './assets/figma/desktop-imgTaskStatus.svg'
import taskStatus1 from './assets/figma/desktop-imgTaskStatus1.svg'
import taskStatus2 from './assets/figma/desktop-imgTaskStatus2.svg'
import triangleAlert from './assets/figma/desktop-imgTriangleAlert.svg'
import users from './assets/figma/desktop-imgUsers.svg'
import windowControls from './assets/figma/desktop-imgWindowControls.svg'

const heroEntrance = stylex.keyframes({
  '0%': { opacity: 0.84, transform: 'translateY(10px)' },
  '53.33%': { opacity: 1, transform: 'translateY(0)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const previewEntrance = stylex.keyframes({
  '0%': { opacity: 0.78, transform: 'translateY(16px)' },
  '13.33%': { opacity: 0.78, transform: 'translateY(16px)' },
  '80%': { opacity: 1, transform: 'translateY(0)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const styles = stylex.create({
  page: { color: '#151618', backgroundColor: '#f6f6f2', overflow: 'hidden' },
  container: { width: '100%', maxWidth: '1440px', marginInline: 'auto' },
  section: {
    paddingInline: '72px', paddingBlock: '112px',
    '@media (max-width: 1100px)': { paddingInline: '40px', paddingBlock: '88px' },
    '@media (max-width: 820px)': { paddingInline: '20px', paddingBlock: '72px' },
  },
  light: { backgroundColor: '#f6f6f2' },
  white: { backgroundColor: '#fff' },
  dark: { color: '#fff', backgroundColor: '#17191d' },
  header: {
    position: 'relative', zIndex: 5, height: '80px', paddingInline: '72px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    borderBottom: '1px solid #d9dad5', backgroundColor: '#f6f6f2',
    '@media (max-width: 1100px)': { paddingInline: '40px' },
    '@media (max-width: 820px)': { height: '72px', paddingInline: '20px' },
  },
  brand: { display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#151618' },
  brandMark: { width: '28px', height: '28px', borderRadius: '8px', backgroundColor: '#5361f1', display: 'grid', placeItems: 'center' },
  brandBars: { height: '14px', display: 'flex', alignItems: 'end', gap: '3px' },
  brandBarA: { width: '3px', height: '7px', borderRadius: '999px', backgroundColor: '#fff' },
  brandBarB: { width: '3px', height: '14px', borderRadius: '999px', backgroundColor: '#fff' },
  brandBarC: { width: '3px', height: '10px', borderRadius: '999px', backgroundColor: '#fff' },
  brandName: { fontSize: '20px', fontWeight: 600 },
  footerBrandName: { color: '#fff', fontSize: '20px', fontWeight: 600 },
  nav: { display: 'flex', alignItems: 'center', gap: '32px', '@media (max-width: 820px)': { display: 'none' } },
  navLink: { color: '#666a70', fontSize: '14px', textDecoration: 'none', ':hover': { color: '#151618' } },
  headerActions: { display: 'flex', alignItems: 'center', gap: '10px', '@media (max-width: 820px)': { gap: '8px' } },
  headerSignIn: { '@media (max-width: 820px)': { display: 'none' } },
  button: {
    minHeight: '44px', paddingInline: '18px', border: '1px solid #d9dad5', borderRadius: '8px',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
    color: '#151618', backgroundColor: '#fff', font: 'inherit', fontSize: '14px',
    textDecoration: 'none', cursor: 'pointer', transition: 'transform 160ms ease, background-color 160ms ease',
    ':hover': { transform: 'translateY(-1px)' },
    ':focus-visible': { outline: '2px solid #5361f1', outlineOffset: '3px' },
  },
  buttonPrimary: { color: '#fff', backgroundColor: '#5361f1', borderColor: '#5361f1', ':hover': { backgroundColor: '#424fd9' } },
  buttonLarge: { minHeight: '52px', paddingInline: '24px' },
  arrow: { display: 'block', width: '15px', height: '15px' },
  menuButton: {
    display: 'none', width: '42px', height: '42px', padding: 0, border: '1px solid #d9dad5',
    borderRadius: '8px', backgroundColor: 'transparent', cursor: 'pointer',
    '@media (max-width: 820px)': { display: 'grid', placeItems: 'center' },
  },
  menuGlyph: { display: 'flex', flexDirection: 'column', gap: '4px' },
  menuLine: { display: 'block', width: '16px', height: '1.5px', backgroundColor: '#151618' },
  mobileNav: {
    display: 'none',
    '@media (max-width: 820px)': { position: 'absolute', top: '71px', left: 0, right: 0, padding: '16px 20px 20px', display: 'flex', flexDirection: 'column', gap: '16px', borderBottom: '1px solid #d9dad5', backgroundColor: '#f6f6f2' },
  },
  mobileNavLink: { '@media (max-width: 820px)': { paddingBlock: '7px', color: '#151618', fontSize: '15px', textDecoration: 'none' } },
  hero: {
    paddingBlock: '76px 94px', display: 'grid', gridTemplateColumns: 'minmax(0, 536px) minmax(0, 1fr)', alignItems: 'center', gap: '70px',
    '@media (max-width: 1100px)': { gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)', gap: '34px' },
    '@media (max-width: 820px)': { display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '38px', paddingBlock: '46px 72px' },
  },
  heroCopy: {
    display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '28px', animationName: heroEntrance, animationDuration: '900ms', animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)', animationIterationCount: 1,
    '@media (max-width: 820px)': { gap: '22px' },
    '@media (prefers-reduced-motion: reduce)': { animationName: 'none' },
  },
  announcement: { display: 'flex', alignItems: 'center', gap: '10px', color: '#666a70', fontSize: '13px', '@media (max-width: 820px)': { gap: '8px', fontSize: '12px' } },
  badge: { padding: '5px 8px', borderRadius: '4px', color: '#fff', backgroundColor: '#5361f1', fontSize: '10px', lineHeight: 1, textTransform: 'uppercase', '@media (max-width: 820px)': { padding: '4px 7px', fontSize: '9px' } },
  heroTitle: { maxWidth: '560px', margin: 0, fontSize: '76px', fontWeight: 450, letterSpacing: 0, lineHeight: 0.98, '@media (max-width: 1100px)': { fontSize: '64px' }, '@media (max-width: 820px)': { maxWidth: '520px', fontSize: '48px', lineHeight: 0.99 } },
  heroText: { maxWidth: '500px', color: '#666a70', fontSize: '20px', lineHeight: 1.5, '@media (max-width: 820px)': { fontSize: '17px' } },
  heroActions: { display: 'flex', flexWrap: 'wrap', gap: '12px', '@media (max-width: 820px)': { width: '100%', flexDirection: 'column', gap: '10px' } },
  heroActionsButton: { '@media (max-width: 820px)': { width: '100%' } },
  assurances: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '18px', color: '#666a70', fontSize: '12px', '@media (max-width: 820px)': { display: 'none' } },
  assuranceMobile: { display: 'none', '@media (max-width: 820px)': { display: 'block', color: '#92969c', fontSize: '11px' } },
  assurance: { display: 'inline-flex', alignItems: 'center', gap: '6px' },
  tinyIcon: { width: '12px', height: '12px' },
  productStage: { position: 'relative', minWidth: 0, height: '610px', display: 'flex', alignItems: 'center', justifyContent: 'center', '@media (max-width: 1100px)': { height: '540px' }, '@media (max-width: 820px)': { width: '100%', height: '480px' } },
  stageRuleV: { position: 'absolute', top: 0, bottom: 0, left: '50%', width: '1px', backgroundColor: '#d9dad5' },
  stageRuleH: { position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', backgroundColor: '#d9dad5' },
  dashboard: { position: 'relative', zIndex: 1, width: 'min(690px, 100%)', height: '520px', overflow: 'hidden', border: '1px solid #d9dad5', borderRadius: '20px', backgroundColor: '#fff', boxShadow: '0 28px 70px -18px rgba(22,24,29,0.14)', animationName: previewEntrance, animationDuration: '900ms', animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)', animationIterationCount: 1, '@media (max-width: 1100px)': { height: '470px' }, '@media (max-width: 820px)': { width: 'min(350px, 100%)', height: '430px', borderRadius: '12px', boxShadow: 'none' }, '@media (prefers-reduced-motion: reduce)': { animationName: 'none' } },
  windowBar: { height: '48px', paddingInline: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e9e9e4', color: '#666a70', fontSize: '10px', '@media (max-width: 820px)': { height: '42px', paddingInline: '12px' } },
  windowControls: { width: '36px', height: '8px' },
  synced: { display: 'flex', alignItems: 'center', gap: '5px', color: '#1f8a5b', fontSize: '9px' },
  liveDot: { width: '6px', height: '6px' },
  workspace: { display: 'flex', height: 'calc(100% - 48px)', '@media (max-width: 820px)': { height: 'calc(100% - 42px)' } },
  sidebar: { width: '152px', flexShrink: 0, padding: '18px 14px', display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#fafaf7', borderRight: '1px solid #e9e9e4', '@media (max-width: 820px)': { width: '62px', padding: '18px 10px', gap: '12px' } },
  projectIdentity: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', fontSize: '11px', fontWeight: 650, '@media (max-width: 820px)': { justifyContent: 'center' } },
  projectName: { '@media (max-width: 820px)': { display: 'none' } },
  projectMark: { width: '24px', height: '24px', display: 'grid', placeItems: 'center', borderRadius: '4px', backgroundColor: '#5361f1', color: '#fff', fontSize: '10px' },
  sideItem: { height: '30px', paddingInline: '9px', display: 'flex', alignItems: 'center', gap: '8px', borderRadius: '4px', color: '#666a70', fontSize: '10px', '@media (max-width: 820px)': { height: '32px', justifyContent: 'center', paddingInline: '8px' } },
  sideLabel: { '@media (max-width: 820px)': { display: 'none' } },
  sideItemActive: { color: '#5361f1', backgroundColor: '#eef0ff' },
  navIcon: { width: '14px', height: '14px' },
  quality: { marginTop: 'auto', padding: '10px', borderRadius: '8px', color: '#fff', backgroundColor: '#151618', fontSize: '9px', '@media (max-width: 820px)': { display: 'none' } },
  qualityTrack: { height: '4px', marginBlock: '7px', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.17)' },
  qualityFill: { width: '76%', height: '4px', borderRadius: '999px', backgroundColor: '#5361f1' },
  qualityMeta: { color: '#a8abb2', fontFamily: '"Roboto Mono", monospace' },
  plan: { minWidth: 0, flex: 1, padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: '16px', overflow: 'hidden', '@media (max-width: 820px)': { padding: '14px', gap: '12px' } },
  planHeading: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' },
  overline: { color: '#5361f1', fontFamily: '"Roboto Mono", monospace', fontSize: '9px', textTransform: 'uppercase' },
  planTitle: { marginTop: '5px', fontSize: '20px', fontWeight: 650, '@media (max-width: 820px)': { fontSize: '16px' } },
  playButton: { width: '34px', height: '34px', display: 'grid', placeItems: 'center', border: 0, borderRadius: '8px', backgroundColor: '#5361f1' },
  playIcon: { width: '13px', height: '13px' },
  goalCard: { padding: '14px', display: 'flex', flexDirection: 'column', gap: '8px', borderRadius: '8px', backgroundColor: '#eef0ff', '@media (max-width: 820px)': { padding: '10px' } },
  goalMeta: { display: 'flex', justifyContent: 'space-between', color: '#5361f1', fontFamily: '"Roboto Mono", monospace', fontSize: '9px' },
  goalText: { fontSize: '12px', lineHeight: 1.4, '@media (max-width: 820px)': { fontSize: '11px' } },
  progressRow: { display: 'flex', alignItems: 'center', gap: '6px' },
  progressSegment: { height: '3px', flex: 1, borderRadius: '999px', backgroundColor: '#5361f1' },
  progressSegmentMuted: { backgroundColor: '#d9dad5' },
  progressText: { marginLeft: 'auto', color: '#666a70', fontSize: '9px', fontFamily: '"Roboto Mono", monospace' },
  taskHeader: { display: 'flex', justifyContent: 'space-between', color: '#92969c', fontSize: '9px', textTransform: 'uppercase' },
  taskRow: { minHeight: '38px', display: 'grid', gridTemplateColumns: '16px minmax(0,1fr) 58px 50px', alignItems: 'center', gap: '8px', borderTop: '1px solid #e9e9e4', fontSize: '10px', '@media (max-width: 820px)': { gridTemplateColumns: '14px minmax(0,1fr) 42px 20px', gap: '5px', fontSize: '9px' } },
  statusIcon: { width: '12px', height: '12px' },
  taskLabel: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
  taskDate: { color: '#92969c', fontSize: '9px', textAlign: 'right' },
  avatar: { width: '18px', height: '18px', display: 'grid', placeItems: 'center', borderRadius: '50%', color: '#5361f1', backgroundColor: '#eef0ff', fontSize: '8px' },
  trust: { paddingBlock: '54px', paddingInline: '72px', borderBlock: '1px solid #d9dad5', backgroundColor: '#fff', '@media (max-width: 820px)': { paddingBlock: '34px', paddingInline: '20px' } },
  trustLabel: { marginBottom: '32px', color: '#92969c', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', '@media (max-width: 820px)': { marginBottom: '22px', fontSize: '10px' } },
  logos: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '18px', color: '#151618', '@media (max-width: 820px)': { display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', rowGap: '18px', columnGap: '12px' } },
  logoWord: { opacity: 0.58, fontSize: '16px', fontWeight: 600, whiteSpace: 'nowrap', '@media (max-width: 820px)': { fontSize: '12px' } },
  trustMetric: { display: 'flex', alignItems: 'baseline', gap: '8px', whiteSpace: 'nowrap', '@media (max-width: 820px)': { gridColumn: '1 / -1' } },
  metricStrong: { fontSize: '24px', fontWeight: 700 },
  metricLabel: { color: '#666a70', fontSize: '12px' },
  sectionIntro: { maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '20px', '@media (max-width: 820px)': { gap: '16px' } },
  eyebrow: { display: 'flex', alignItems: 'center', gap: '8px', color: '#5361f1', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' },
  accentRule: { width: '20px', height: '2px', backgroundColor: '#5361f1' },
  sectionTitle: { margin: 0, fontSize: '52px', fontWeight: 450, letterSpacing: 0, lineHeight: 1.04, '@media (max-width: 820px)': { fontSize: '36px', lineHeight: 1.06 } },
  sectionText: { color: '#666a70', fontSize: '18px', lineHeight: 1.55, '@media (max-width: 820px)': { fontSize: '16px' } },
  workflow: { display: 'flex', flexDirection: 'column', gap: '70px', '@media (max-width: 820px)': { gap: '38px' } },
  workflowBody: { display: 'grid', gridTemplateColumns: 'minmax(0, 500px) minmax(0, 1fr)', alignItems: 'start', gap: '80px', '@media (max-width: 1100px)': { gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)', gap: '40px' }, '@media (max-width: 820px)': { gridTemplateColumns: '1fr', gap: '28px' } },
  steps: { display: 'flex', flexDirection: 'column' },
  step: { paddingBlock: '25px', display: 'flex', alignItems: 'start', gap: '22px', borderTop: '1px solid #d9dad5', '@media (max-width: 820px)': { paddingBlock: '20px', gap: '16px' } },
  stepNumber: { width: '34px', height: '34px', flexShrink: 0, display: 'grid', placeItems: 'center', border: '1px solid #d9dad5', borderRadius: '50%', color: '#666a70', fontFamily: '"Roboto Mono", monospace', fontSize: '11px' },
  stepNumberActive: { color: '#fff', borderColor: '#5361f1', backgroundColor: '#5361f1' },
  stepCopy: { display: 'flex', flexDirection: 'column', gap: '7px' },
  stepTitle: { fontSize: '20px', '@media (max-width: 820px)': { fontSize: '17px' } },
  stepText: { color: '#666a70', fontSize: '14px', lineHeight: 1.5, '@media (max-width: 820px)': { fontSize: '13px' } },
  transformCard: { minHeight: '500px', padding: '34px', display: 'flex', flexDirection: 'column', gap: '24px', border: '1px solid #d9dad5', backgroundColor: '#fff', '@media (max-width: 820px)': { minHeight: '390px', padding: '22px', gap: '20px' } },
  cardMeta: { display: 'flex', justifyContent: 'space-between', color: '#92969c', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' },
  ready: { color: '#1f8a5b', fontFamily: '"Roboto Mono", monospace', fontSize: '10px' },
  outcome: { fontSize: '26px', fontWeight: 600, lineHeight: 1.25, '@media (max-width: 820px)': { fontSize: '21px' } },
  divider: { width: '100%', height: '1px', backgroundColor: '#d9dad5' },
  generation: { display: 'flex', alignItems: 'center', gap: '14px' },
  generationMark: { width: '34px', height: '34px', display: 'grid', placeItems: 'center', borderRadius: '8px', color: '#fff', backgroundColor: '#5361f1' },
  generationCopy: { minWidth: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' },
  generationTrack: { height: '4px', overflow: 'hidden', borderRadius: '999px', backgroundColor: '#e9e9e4' },
  generationFill: { width: '78%', height: '100%', backgroundColor: '#5361f1' },
  percentage: { color: '#5361f1', fontFamily: '"Roboto Mono", monospace', fontSize: '10px' },
  generatedMetrics: { display: 'flex', justifyContent: 'space-between', gap: '12px' },
  generatedMetric: { display: 'flex', flexDirection: 'column', gap: '5px' },
  generatedValue: { fontSize: '26px', fontWeight: 700, '@media (max-width: 820px)': { fontSize: '22px' } },
  generatedLabel: { color: '#666a70', fontSize: '11px', '@media (max-width: 820px)': { fontSize: '10px' } },
  benefits: { display: 'flex', flexDirection: 'column', gap: '68px', '@media (max-width: 820px)': { gap: '36px' } },
  benefitsHead: { display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: '48px', '@media (max-width: 820px)': { alignItems: 'start', flexDirection: 'column', gap: '18px' } },
  audience: { maxWidth: '250px', color: '#92969c', fontSize: '13px', lineHeight: 1.5, '@media (max-width: 820px)': { maxWidth: 'none' } },
  benefitGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', borderTop: '1px solid #d9dad5', '@media (max-width: 820px)': { gridTemplateColumns: '1fr' } },
  benefit: { minHeight: '270px', padding: '28px 44px 6px', display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '24px', borderLeft: '1px solid #d9dad5', '@media (max-width: 1100px)': { paddingInline: '28px' }, '@media (max-width: 820px)': { minHeight: 0, padding: '24px 0', gap: '16px', borderLeft: 0, borderTop: '1px solid #d9dad5' } },
  benefitFirst: { paddingLeft: 0, borderLeft: 0, '@media (max-width: 820px)': { paddingTop: '24px', borderTop: 0 } },
  benefitIcon: { width: '42px', height: '42px', display: 'grid', placeItems: 'center', borderRadius: '8px', backgroundColor: '#eef0ff' },
  benefitTitle: { fontSize: '26px', lineHeight: 1.15, '@media (max-width: 820px)': { fontSize: '22px' } },
  benefitText: { color: '#666a70', fontSize: '15px', lineHeight: 1.55 },
  textLink: { display: 'inline-flex', alignItems: 'center', gap: '7px', color: '#151618', fontSize: '13px', textDecoration: 'none' },
  icon20: { display: 'block', width: '20px', height: '20px' },
  showcase: { display: 'flex', flexDirection: 'column', gap: '58px', '@media (max-width: 820px)': { gap: '34px' } },
  showcaseHeading: { display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: '50px', '@media (max-width: 820px)': { alignItems: 'start', flexDirection: 'column', gap: '16px' } },
  showcaseCopy: { maxWidth: '710px', display: 'flex', flexDirection: 'column', gap: '20px', '@media (max-width: 820px)': { gap: '16px' } },
  showcaseOverline: { color: '#8e98ff', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' },
  showcaseText: { maxWidth: '360px', color: '#a8abb2', fontSize: '17px', lineHeight: 1.55, '@media (max-width: 820px)': { maxWidth: 'none', fontSize: '15px' } },
  showcaseCard: { minHeight: '540px', display: 'grid', gridTemplateColumns: '290px minmax(0, 1fr)', border: '1px solid rgba(255,255,255,0.13)', backgroundColor: '#22252a', '@media (max-width: 820px)': { minHeight: 0, gridTemplateColumns: '1fr' } },
  showcaseRail: { padding: '30px', display: 'flex', flexDirection: 'column', gap: '28px', borderRight: '1px solid rgba(255,255,255,0.12)', backgroundColor: '#1d1f23', '@media (max-width: 820px)': { padding: '20px', gap: '18px' } },
  railTitle: { color: '#fff', fontSize: '18px' },
  phaseList: { display: 'flex', flexDirection: 'column', '@media (max-width: 820px)': { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', columnGap: '18px' } },
  phase: { minHeight: '56px', display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.09)', color: '#a8abb2', fontSize: '13px', '@media (max-width: 820px)': { minHeight: '48px', gap: '8px', fontSize: '11px' } },
  phaseDone: { color: '#fff' },
  phaseMarker: { width: '24px', height: '24px', flexShrink: 0, display: 'grid', placeItems: 'center', border: '1px solid rgba(255,255,255,0.17)', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)' },
  phaseMarkerDone: { borderColor: '#5361f1', backgroundColor: '#5361f1' },
  risk: { marginTop: 'auto', padding: '14px', display: 'flex', flexDirection: 'column', gap: '9px', border: '1px solid rgba(231,163,62,0.33)', borderRadius: '8px', backgroundColor: '#2a2721', '@media (max-width: 820px)': { marginTop: 0 } },
  riskLabel: { display: 'flex', alignItems: 'center', gap: '7px', color: '#e7a33e', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' },
  riskText: { color: '#a8abb2', fontSize: '11px', lineHeight: 1.4 },
  timeline: { minWidth: 0, padding: '34px', display: 'flex', flexDirection: 'column', gap: '28px', '@media (max-width: 820px)': { padding: '20px', gap: '20px' } },
  timelineHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' },
  timelineButton: { '@media (max-width: 820px)': { display: 'none' } },
  timelineTitle: { marginTop: '5px', color: '#fff', fontSize: '23px', '@media (max-width: 820px)': { fontSize: '18px' } },
  weekLabels: { paddingLeft: '150px', display: 'flex', justifyContent: 'space-between', gap: '12px', color: '#737780', fontFamily: '"Roboto Mono", monospace', fontSize: '9px', '@media (max-width: 820px)': { paddingLeft: '92px', gap: '6px', fontSize: '7px' } },
  timelineRows: { display: 'flex', flexDirection: 'column' },
  timelineRow: { minHeight: '48px', display: 'grid', gridTemplateColumns: '132px 1fr', alignItems: 'center', gap: '18px', borderTop: '1px solid rgba(255,255,255,0.07)', color: '#a8abb2', fontSize: '12px', '@media (max-width: 820px)': { minHeight: '42px', gridTemplateColumns: '78px 1fr', gap: '12px', fontSize: '10px' } },
  track: { height: '12px', display: 'flex', alignItems: 'center' },
  bar1: { width: '34%', height: '12px', borderRadius: '4px', backgroundColor: '#5361f1' },
  bar2: { width: '55%', height: '12px', borderRadius: '4px', backgroundColor: '#7b86f5' },
  bar3: { width: '45%', height: '12px', borderRadius: '4px', backgroundColor: '#9ea6f8' },
  bar4: { width: '31%', height: '12px', borderRadius: '4px', backgroundColor: '#e7a33e' },
  bar5: { width: '24%', height: '12px', borderRadius: '4px', backgroundColor: '#1f8a5b' },
  timelineFooter: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', color: '#a8abb2', fontSize: '11px', '@media (max-width: 820px)': { alignItems: 'start', fontSize: '9px' } },
  today: { color: '#8e98ff', fontFamily: '"Roboto Mono", monospace', fontSize: '9px', fontWeight: 700 },
  integrations: { display: 'grid', gridTemplateColumns: 'minmax(0, 470px) minmax(0, 1fr)', alignItems: 'start', gap: '88px', '@media (max-width: 1100px)': { gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)', gap: '48px' }, '@media (max-width: 820px)': { gridTemplateColumns: '1fr', gap: '28px' } },
  integrationGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '16px', '@media (max-width: 820px)': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px' } },
  integration: { minHeight: '72px', paddingInline: '20px', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #d9dad5', backgroundColor: '#fff', fontSize: '15px', '@media (max-width: 820px)': { minHeight: '62px', paddingInline: '12px', gap: '9px', fontSize: '12px' } },
  integrationIcon: { width: '32px', height: '32px', flexShrink: 0, display: 'grid', placeItems: 'center', borderRadius: '8px', backgroundColor: '#f4f4f0' },
  icon17: { display: 'block', width: '17px', height: '17px' },
  integrationNote: { gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '9px', color: '#666a70', fontSize: '12px', '@media (max-width: 820px)': { fontSize: '10px' } },
  customer: { display: 'grid', gridTemplateColumns: '470px minmax(0, 1fr)', gap: '80px', '@media (max-width: 1100px)': { gridTemplateColumns: 'minmax(300px, 0.9fr) minmax(0, 1.1fr)', gap: '48px' }, '@media (max-width: 820px)': { gridTemplateColumns: '1fr', gap: '28px' } },
  portrait: { width: '100%', height: '480px', objectFit: 'cover', '@media (max-width: 820px)': { height: 'auto', aspectRatio: '1 / 1', objectPosition: 'center 42%' } },
  customerStory: { minHeight: '480px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '50px', '@media (max-width: 820px)': { minHeight: 0, gap: '38px' } },
  quoteContent: { display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '30px', '@media (max-width: 820px)': { gap: '22px' } },
  quote: { fontSize: '38px', lineHeight: 1.2, '@media (max-width: 1100px)': { fontSize: '32px' }, '@media (max-width: 820px)': { fontSize: '28px' } },
  quoteRule: { width: '26px', height: '2px', backgroundColor: '#5361f1' },
  author: { display: 'flex', flexDirection: 'column', gap: '5px' },
  authorName: { fontSize: '15px', fontWeight: 700 },
  authorMeta: { color: '#666a70', fontSize: '13px' },
  results: { paddingTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '20px', borderTop: '1px solid #d9dad5', '@media (max-width: 820px)': { gap: '10px' } },
  resultValue: { fontSize: '28px', fontWeight: 700, '@media (max-width: 820px)': { fontSize: '22px' } },
  resultLabel: { maxWidth: '120px', color: '#666a70', fontSize: '11px', lineHeight: 1.4, '@media (max-width: 820px)': { fontSize: '10px' } },
  pricing: { display: 'flex', flexDirection: 'column', gap: '60px', '@media (max-width: 820px)': { gap: '32px' } },
  offer: { padding: '44px', display: 'grid', gridTemplateColumns: '280px minmax(0, 1fr) 260px', alignItems: 'center', gap: '64px', border: '1px solid #151618', backgroundColor: '#fff', '@media (max-width: 1100px)': { gridTemplateColumns: '220px minmax(0, 1fr) 230px', gap: '32px' }, '@media (max-width: 820px)': { padding: '24px', gridTemplateColumns: '1fr', gap: '26px' } },
  priceLabel: { color: '#5361f1', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' },
  priceRow: { display: 'flex', alignItems: 'baseline', gap: '6px', whiteSpace: 'nowrap' },
  price: { fontSize: '58px', lineHeight: 1.1, '@media (max-width: 820px)': { fontSize: '48px' } },
  priceUnit: { color: '#666a70', fontSize: '13px' },
  billing: { color: '#92969c', fontSize: '12px' },
  offerFeatures: { display: 'flex', flexDirection: 'column', gap: '15px', '@media (max-width: 820px)': { gap: '12px' } },
  offerFeature: { display: 'flex', alignItems: 'center', gap: '11px', fontSize: '14px' },
  checkCircle: { width: '22px', height: '22px', flexShrink: 0, display: 'grid', placeItems: 'center', borderRadius: '50%', backgroundColor: '#eef0ff' },
  checkIcon: { display: 'block', width: '12px', height: '12px' },
  offerAction: { display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '12px' },
  actionNote: { color: '#666a70', fontSize: '11px', textAlign: 'center' },
  contactNote: { color: '#151618', fontSize: '12px', textAlign: 'center' },
  faq: { display: 'grid', gridTemplateColumns: '390px minmax(0, 1fr)', alignItems: 'start', gap: '112px', '@media (max-width: 1100px)': { gridTemplateColumns: '320px minmax(0, 1fr)', gap: '56px' }, '@media (max-width: 820px)': { gridTemplateColumns: '1fr', gap: '34px' } },
  faqIntro: { display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '28px', '@media (max-width: 820px)': { gap: '20px' } },
  faqList: { display: 'flex', flexDirection: 'column' },
  faqItem: { paddingBlock: '22px', borderTop: '1px solid #d9dad5' },
  faqQuestion: { width: '100%', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', borderWidth: 0, borderStyle: 'none', appearance: 'none', color: '#151618', backgroundColor: 'transparent', font: 'inherit', fontSize: '18px', fontWeight: 400, textAlign: 'left', cursor: 'pointer', ':focus-visible': { outline: '2px solid #5361f1', outlineOffset: '4px' }, '@media (max-width: 820px)': { fontSize: '16px' } },
  faqAnswer: { maxWidth: '650px', paddingTop: '14px', color: '#666a70', fontSize: '14px', lineHeight: 1.55 },
  icon18: { display: 'block', width: '18px', height: '18px', flexShrink: 0 },
  cta: { minHeight: '500px', paddingBlock: '90px', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 360px', alignItems: 'center', gap: '80px', color: '#fff', backgroundColor: '#5361f1', '@media (max-width: 820px)': { minHeight: 0, gridTemplateColumns: '1fr', gap: '28px', paddingBlock: '72px' } },
  ctaCopy: { display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '26px', '@media (max-width: 820px)': { gap: '20px' } },
  ctaLabel: { color: 'rgba(255,255,255,0.72)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' },
  ctaTitle: { maxWidth: '800px', fontSize: '58px', lineHeight: 1.02, '@media (max-width: 820px)': { fontSize: '42px' } },
  ctaAction: { display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '16px', '@media (max-width: 820px)': { maxWidth: '360px' } },
  ctaText: { color: 'rgba(255,255,255,0.84)', fontSize: '17px', lineHeight: 1.5, '@media (max-width: 820px)': { fontSize: '15px' } },
  ctaFoot: { color: 'rgba(255,255,255,0.66)', fontSize: '11px' },
  footer: { paddingBlock: '72px 36px', display: 'flex', flexDirection: 'column', gap: '70px', color: '#fff', backgroundColor: '#17191d', '@media (max-width: 820px)': { gap: '42px', paddingBlock: '54px 28px' } },
  footerContent: { display: 'grid', gridTemplateColumns: 'minmax(280px, 2fr) repeat(3, minmax(120px, 1fr))', gap: '48px', '@media (max-width: 820px)': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '32px 20px' } },
  footerBrand: { maxWidth: '360px', display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '18px', '@media (max-width: 820px)': { gridColumn: '1 / -1' } },
  footerText: { maxWidth: '320px', color: '#a8abb2', fontSize: '14px', lineHeight: 1.5 },
  footerGroup: { display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '13px', fontSize: '13px' },
  footerHeading: { marginBottom: '2px', color: '#fff', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' },
  footerLink: { color: '#a8abb2', textDecoration: 'none', ':hover': { color: '#fff' } },
  legal: { paddingTop: '26px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', borderTop: '1px solid rgba(255,255,255,0.13)', color: 'rgba(255,255,255,0.45)', fontSize: '11px', '@media (max-width: 820px)': { alignItems: 'start', flexDirection: 'column', fontSize: '10px' } },
  legalLinks: { display: 'flex', gap: '24px', '@media (max-width: 820px)': { gap: '18px' } },
})

const faqItems = [
  ['Will Flowly replace our issue tracker?', 'No. Flowly adds planning and shared context above the tools where your team already executes work.'],
  ['How does the AI use our data?', 'Your workspace data is used to generate relevant plans and remains within your workspace. You control which integrations are connected.'],
  ['Can we edit the generated plan?', 'Yes. Every milestone, task, owner, and date is yours to change before or after the plan is shared.'],
  ['What happens when priorities change?', 'Update the goal or constraints and Flowly helps revise the plan while keeping the original intent visible.'],
  ['Is Flowly useful before integrations?', 'Absolutely. Start with a goal and your team context, then connect the tools you already use when you are ready.'],
]

const integrationItems = [
  ['GitHub', githubIcon], ['Slack', messages], ['Figma', figmaIcon],
  ['Linear', panelTop], ['Notion', fileText], ['Google Calendar', calendarDays],
]

const timelineItems = [
  ['Architecture', styles.bar1], ['Billing API', styles.bar2], ['Checkout UI', styles.bar3],
  ['Migration QA', styles.bar4], ['Rollout', styles.bar5],
]

function Brand({ footer = false }) {
  return (
    <a href="#top" {...stylex.props(styles.brand)} aria-label="Flowly home">
      <span {...stylex.props(styles.brandMark)}>
        <span {...stylex.props(styles.brandBars)}>
          <i {...stylex.props(styles.brandBarA)} />
          <i {...stylex.props(styles.brandBarB)} />
          <i {...stylex.props(styles.brandBarC)} />
        </span>
      </span>
      <span {...stylex.props(footer ? styles.footerBrandName : styles.brandName)}>Flowly</span>
    </a>
  )
}

function Arrow() {
  return <img src={arrowRight} alt="" {...stylex.props(styles.arrow)} />
}

function DashboardPreview() {
  const tasks = [
    ['Define event taxonomy', taskStatus, 'OCT 09', 'MC'],
    ['Implement reporting API', taskStatus1, 'OCT 15', 'JR'],
    ['Build dashboard filters', taskStatus2, 'OCT 18', 'AL'],
    ['Review access model', taskStatus, 'OCT 21', 'MC'],
  ]

  return (
    <div {...stylex.props(styles.dashboard)} aria-label="Flowly project plan preview">
      <div {...stylex.props(styles.windowBar)}>
        <img src={windowControls} alt="" {...stylex.props(styles.windowControls)} />
        <span>NORTHSTAR / Q4</span>
        <span {...stylex.props(styles.synced)}><img src={liveDot} alt="" {...stylex.props(styles.liveDot)} /> SYNCED</span>
      </div>
      <div {...stylex.props(styles.workspace)}>
        <aside {...stylex.props(styles.sidebar)}>
          <div {...stylex.props(styles.projectIdentity)}>
            <span {...stylex.props(styles.projectMark)}>N</span><span {...stylex.props(styles.projectName)}>Northstar</span>
          </div>
          <div {...stylex.props(styles.sideItem, styles.sideItemActive)}><img src={sparkles} alt="" {...stylex.props(styles.navIcon)} /><span {...stylex.props(styles.sideLabel)}>Plan</span></div>
          <div {...stylex.props(styles.sideItem)}><img src={listChecks} alt="" {...stylex.props(styles.navIcon)} /><span {...stylex.props(styles.sideLabel)}>Tasks</span></div>
          <div {...stylex.props(styles.sideItem)}><img src={calendarRange} alt="" {...stylex.props(styles.navIcon)} /><span {...stylex.props(styles.sideLabel)}>Timeline</span></div>
          <div {...stylex.props(styles.sideItem)}><img src={users} alt="" {...stylex.props(styles.navIcon)} /><span {...stylex.props(styles.sideLabel)}>Team</span></div>
          <div {...stylex.props(styles.quality)}>
            <span>Plan quality</span><div {...stylex.props(styles.qualityTrack)}><div {...stylex.props(styles.qualityFill)} /></div>
            <span {...stylex.props(styles.qualityMeta)}>88% · READY</span>
          </div>
        </aside>
        <div {...stylex.props(styles.plan)}>
          <div {...stylex.props(styles.planHeading)}>
            <div><div {...stylex.props(styles.overline)}>AI project plan</div><div {...stylex.props(styles.planTitle)}>Ship team analytics</div></div>
            <button type="button" aria-label="Preview plan" {...stylex.props(styles.playButton)}><img src={play} alt="" {...stylex.props(styles.playIcon)} /></button>
          </div>
          <div {...stylex.props(styles.goalCard)}>
            <div {...stylex.props(styles.goalMeta)}><strong>GOAL</strong><span>96% CONFIDENCE</span></div>
            <p {...stylex.props(styles.goalText)}>Give workspace admins weekly product insights by Oct 28.</p>
          </div>
          <div {...stylex.props(styles.progressRow)}>
            <div {...stylex.props(styles.progressSegment)} /><div {...stylex.props(styles.progressSegment)} />
            <div {...stylex.props(styles.progressSegment)} /><div {...stylex.props(styles.progressSegment, styles.progressSegmentMuted)} />
            <span {...stylex.props(styles.progressText)}>3 OF 4 MILESTONES</span>
          </div>
          <div {...stylex.props(styles.taskHeader)}><span>Next tasks</span><span>Owner / due</span></div>
          <div>{tasks.map(([label, icon, date, owner]) => (
            <div key={label} {...stylex.props(styles.taskRow)}>
              <img src={icon} alt="" {...stylex.props(styles.statusIcon)} /><span {...stylex.props(styles.taskLabel)}>{label}</span>
              <span {...stylex.props(styles.taskDate)}>{date}</span><span {...stylex.props(styles.avatar)}>{owner}</span>
            </div>
          ))}</div>
        </div>
      </div>
    </div>
  )
}

function Eyebrow({ children }) {
  return <div {...stylex.props(styles.eyebrow)}><span {...stylex.props(styles.accentRule)} />{children}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const navItems = [['Product', '#workflow'], ['How it works', '#workflow'], ['Customers', '#customers'], ['Pricing', '#pricing']]
  const benefits = [
    [route, 'Plans that explain themselves', 'Every task traces back to an outcome, so tradeoffs stay visible.'],
    [triangleAlert, 'Risks surfaced early', 'Flowly flags unclear ownership, tight dependencies, and scope creep.'],
    [refresh, 'Always-current context', 'Status, priorities, and dates stay in sync as your team works.'],
  ]

  return (
    <main id="top" {...stylex.props(styles.page)}>
      <header {...stylex.props(styles.container, styles.header)}>
        <Brand />
        <nav aria-label="Main navigation" {...stylex.props(styles.nav)}>
          {navItems.map(([label, href]) => <a key={label} href={href} {...stylex.props(styles.navLink)}>{label}</a>)}
        </nav>
        <div {...stylex.props(styles.headerActions)}>
          <a href="#pricing" {...stylex.props(styles.button, styles.headerSignIn)}>Sign in</a>
          <a href="#pricing" {...stylex.props(styles.button, styles.buttonPrimary)}>Start free <Arrow /></a>
          <button type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} {...stylex.props(styles.menuButton)}>
            <span {...stylex.props(styles.menuGlyph)}><i {...stylex.props(styles.menuLine)} /><i {...stylex.props(styles.menuLine)} /><i {...stylex.props(styles.menuLine)} /></span>
          </button>
        </div>
        {menuOpen && <nav aria-label="Mobile navigation" {...stylex.props(styles.mobileNav)}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} {...stylex.props(styles.mobileNavLink)}>{label}</a>)}
        </nav>}
      </header>

      <section {...stylex.props(styles.container, styles.section, styles.hero)}>
        <div {...stylex.props(styles.heroCopy)}>
          <div {...stylex.props(styles.announcement)}><span {...stylex.props(styles.badge)}>New</span><span>AI planning that works from your actual goals</span></div>
          <h1 {...stylex.props(styles.heroTitle)}>Your goal, turned into a plan your team can ship.</h1>
          <p {...stylex.props(styles.heroText)}>Flowly turns a clear outcome into milestones, tasks, owners, dependencies, and risks, then keeps the plan current as work moves.</p>
          <div {...stylex.props(styles.heroActions)}>
            <a href="#pricing" {...stylex.props(styles.button, styles.buttonPrimary, styles.buttonLarge, styles.heroActionsButton)}>Build my first plan <Arrow /></a>
            <a href="#workflow" {...stylex.props(styles.button, styles.buttonLarge, styles.heroActionsButton)}>See how it works</a>
          </div>
          <div {...stylex.props(styles.assurances)}>
            <span {...stylex.props(styles.assurance)}><img src={check} alt="" {...stylex.props(styles.tinyIcon)} />Free for 14 days</span>
            <span {...stylex.props(styles.assurance)}><img src={check} alt="" {...stylex.props(styles.tinyIcon)} />No credit card</span>
            <span {...stylex.props(styles.assurance)}><img src={check} alt="" {...stylex.props(styles.tinyIcon)} />Setup in 5 minutes</span>
          </div>
          <p {...stylex.props(styles.assuranceMobile)}>14 days free · No credit card · Setup in 5 minutes</p>
        </div>
        <div {...stylex.props(styles.productStage)}>
          <span aria-hidden="true" {...stylex.props(styles.stageRuleV)} /><span aria-hidden="true" {...stylex.props(styles.stageRuleH)} />
          <DashboardPreview />
        </div>
      </section>

      <section aria-label="Teams using Flowly" {...stylex.props(styles.container, styles.trust)}>
        <p {...stylex.props(styles.trustLabel)}>Small software teams plan and ship with Flowly</p>
        <div {...stylex.props(styles.logos)}>
          <span {...stylex.props(styles.logoWord)}>PATCHWORK</span><span {...stylex.props(styles.logoWord)}>Orbit</span>
          <span {...stylex.props(styles.logoWord)}>KINETIC</span><span {...stylex.props(styles.logoWord)}>Cobalt</span>
          <span {...stylex.props(styles.logoWord)}>Daybreak</span><span {...stylex.props(styles.logoWord)}>STACKLINE</span>
          <span {...stylex.props(styles.trustMetric)}><strong {...stylex.props(styles.metricStrong)}>1,200+</strong><span {...stylex.props(styles.metricLabel)}>plans shipped</span></span>
        </div>
      </section>

      <section id="workflow" {...stylex.props(styles.container, styles.section, styles.light, styles.workflow)}>
        <div {...stylex.props(styles.sectionIntro)}>
          <Eyebrow>Goal to plan</Eyebrow>
          <h2 {...stylex.props(styles.sectionTitle)}>Start with the outcome. Flowly handles the breakdown.</h2>
          <p {...stylex.props(styles.sectionText)}>No blank project templates. Describe what success looks like and Flowly builds a practical first draft around your team, timeline, and tools.</p>
        </div>
        <div {...stylex.props(styles.workflowBody)}>
          <div {...stylex.props(styles.steps)}>
            {[
              ['State the goal', 'Add the outcome, deadline, constraints, and the people available.'],
              ['Review the plan', 'Flowly proposes milestones, tasks, owners, dependencies, and risks.'],
              ['Ship and adapt', 'As work changes, the plan updates without losing the original intent.'],
            ].map(([title, text], index) => <div key={title} {...stylex.props(styles.step)}>
              <span {...stylex.props(styles.stepNumber, index === 0 && styles.stepNumberActive)}>0{index + 1}</span>
              <div {...stylex.props(styles.stepCopy)}><strong {...stylex.props(styles.stepTitle)}>{title}</strong><p {...stylex.props(styles.stepText)}>{text}</p></div>
            </div>)}
          </div>
          <div {...stylex.props(styles.transformCard)}>
            <div {...stylex.props(styles.cardMeta)}><span>Your goal</span><span {...stylex.props(styles.ready)}>Ready</span></div>
            <p {...stylex.props(styles.outcome)}>“Launch self-serve billing by November 15 without delaying onboarding work.”</p>
            <div {...stylex.props(styles.divider)} />
            <div {...stylex.props(styles.generation)}>
              <span {...stylex.props(styles.generationMark)}><img src={sparkles} alt="" {...stylex.props(styles.icon20)} /></span>
              <div {...stylex.props(styles.generationCopy)}><span>Building your launch plan</span><div {...stylex.props(styles.generationTrack)}><div {...stylex.props(styles.generationFill)} /></div></div>
              <span {...stylex.props(styles.percentage)}>78%</span>
            </div>
            <div {...stylex.props(styles.generatedMetrics)}>
              {[["4", 'milestones'], ["18", 'tasks'], ["3", 'risks'], ['6 wk', 'timeline']].map(([value, label]) => <div key={label} {...stylex.props(styles.generatedMetric)}><strong {...stylex.props(styles.generatedValue)}>{value}</strong><span {...stylex.props(styles.generatedLabel)}>{label}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section {...stylex.props(styles.container, styles.section, styles.white, styles.benefits)}>
        <div {...stylex.props(styles.benefitsHead)}>
          <div {...stylex.props(styles.sectionIntro)}><Eyebrow>Less project overhead</Eyebrow><h2 {...stylex.props(styles.sectionTitle)}>Clarity without a full-time project manager.</h2><p {...stylex.props(styles.sectionText)}>Flowly gives focused teams the planning discipline of a larger organization, without the ceremony.</p></div>
          <p {...stylex.props(styles.audience)}>Built for teams of 3–30 shipping web, mobile, and platform products.</p>
        </div>
        <div {...stylex.props(styles.benefitGrid)}>
          {benefits.map(([icon, title, text], index) => <article key={title} {...stylex.props(styles.benefit, index === 0 && styles.benefitFirst)}>
            <span {...stylex.props(styles.benefitIcon)}><img src={icon} alt="" {...stylex.props(styles.icon20)} /></span>
            <h3 {...stylex.props(styles.benefitTitle)}>{title}</h3><p {...stylex.props(styles.benefitText)}>{text}</p>
            <a href="#pricing" {...stylex.props(styles.textLink)}>Explore feature <Arrow /></a>
          </article>)}
        </div>
      </section>

      <section {...stylex.props(styles.container, styles.section, styles.dark, styles.showcase)}>
        <div {...stylex.props(styles.showcaseHeading)}>
          <div {...stylex.props(styles.showcaseCopy)}><span {...stylex.props(styles.showcaseOverline)}>One shared plan</span><h2 {...stylex.props(styles.sectionTitle)}>See what matters now—and what changes next.</h2></div>
          <p {...stylex.props(styles.showcaseText)}>Flowly connects strategy, execution, and updates in one calm operating view.</p>
        </div>
        <div {...stylex.props(styles.showcaseCard)}>
          <aside {...stylex.props(styles.showcaseRail)}>
            <strong {...stylex.props(styles.railTitle)}>Billing launch</strong>
            <div {...stylex.props(styles.phaseList)}>
              {['Scope & architecture', 'Core billing flow', 'Migration & QA', 'Rollout'].map((phase, index) => <div key={phase} {...stylex.props(styles.phase, index < 2 && styles.phaseDone)}>
                <span {...stylex.props(styles.phaseMarker, index < 2 && styles.phaseMarkerDone)}>{index < 2 && <img src={checkSmall} alt="" {...stylex.props(styles.tinyIcon)} />}</span>{phase}
              </div>)}
            </div>
            <div {...stylex.props(styles.risk)}><strong {...stylex.props(styles.riskLabel)}><img src={triangleAlert} alt="" {...stylex.props(styles.tinyIcon)} />Risk detected</strong><p {...stylex.props(styles.riskText)}>Migration work has no fallback owner.</p></div>
          </aside>
          <div {...stylex.props(styles.timeline)}>
            <div {...stylex.props(styles.timelineHeader)}><div><span {...stylex.props(styles.overline)}>Live timeline</span><h3 {...stylex.props(styles.timelineTitle)}>Six-week delivery plan</h3></div><a href="#pricing" {...stylex.props(styles.button, styles.timelineButton)}>Share update <Arrow /></a></div>
            <div {...stylex.props(styles.weekLabels)}>{['OCT 07', 'OCT 14', 'OCT 21', 'OCT 28', 'NOV 04', 'NOV 11'].map((week) => <span key={week}>{week}</span>)}</div>
            <div {...stylex.props(styles.timelineRows)}>{timelineItems.map(([label, bar]) => <div key={label} {...stylex.props(styles.timelineRow)}><span>{label}</span><div {...stylex.props(styles.track)}><span {...stylex.props(bar)} /></div></div>)}</div>
            <div {...stylex.props(styles.timelineFooter)}><span>2 dependencies resolved automatically</span><strong {...stylex.props(styles.today)}>TODAY →</strong></div>
          </div>
        </div>
      </section>

      <section {...stylex.props(styles.container, styles.section, styles.light, styles.integrations)}>
        <div {...stylex.props(styles.sectionIntro)}><Eyebrow>Fits your stack</Eyebrow><h2 {...stylex.props(styles.sectionTitle)}>Bring the tools. Lose the busywork.</h2><p {...stylex.props(styles.sectionText)}>Flowly reads the signals your team already creates and turns them into accurate project context.</p></div>
        <div {...stylex.props(styles.integrationGrid)}>
          {integrationItems.map(([name, icon]) => <div key={name} {...stylex.props(styles.integration)}><span {...stylex.props(styles.integrationIcon)}><img src={icon} alt="" {...stylex.props(styles.icon17)} /></span>{name}</div>)}
          <p {...stylex.props(styles.integrationNote)}><img src={lock} alt="" {...stylex.props(styles.icon18)} />Read-only by default. You choose what Flowly can update.</p>
        </div>
      </section>

      <section id="customers" {...stylex.props(styles.container, styles.section, styles.white, styles.customer)}>
        <img src={customerPortrait} alt="Product leader Maya Chen working at a laptop" {...stylex.props(styles.portrait)} />
        <div {...stylex.props(styles.customerStory)}>
          <div {...stylex.props(styles.quoteContent)}>
            <div {...stylex.props(styles.eyebrow)}><span {...stylex.props(styles.quoteRule)} />Customer story</div>
            <blockquote {...stylex.props(styles.quote)}>“Flowly gave us the plan we would have spent three meetings arguing into existence. We edited it for ten minutes and started.”</blockquote>
            <div {...stylex.props(styles.author)}><strong {...stylex.props(styles.authorName)}>Maya Chen</strong><span {...stylex.props(styles.authorMeta)}>Head of Product, Patchwork · 14-person team</span></div>
          </div>
          <div {...stylex.props(styles.results)}>{[['6 hrs', 'saved per project kickoff'], ['31%', 'fewer slipped tasks'], ['2×', 'faster weekly updates']].map(([value, label]) => <div key={value} {...stylex.props(styles.generatedMetric)}><strong {...stylex.props(styles.resultValue)}>{value}</strong><span {...stylex.props(styles.resultLabel)}>{label}</span></div>)}</div>
        </div>
      </section>

      <section id="pricing" {...stylex.props(styles.container, styles.section, styles.light, styles.pricing)}>
        <div {...stylex.props(styles.sectionIntro)}><Eyebrow>Simple pricing</Eyebrow><h2 {...stylex.props(styles.sectionTitle)}>One plan for teams that want to move.</h2><p {...stylex.props(styles.sectionText)}>Try every feature free for 14 days. Keep your work even if you decide not to continue.</p></div>
        <div {...stylex.props(styles.offer)}>
          <div {...stylex.props(styles.generatedMetric)}><strong {...stylex.props(styles.priceLabel)}>Team plan</strong><div {...stylex.props(styles.priceRow)}><span {...stylex.props(styles.price)}>$12</span><span {...stylex.props(styles.priceUnit)}>per person / month</span></div><span {...stylex.props(styles.billing)}>Billed monthly. Cancel any time.</span></div>
          <div {...stylex.props(styles.offerFeatures)}>{['Unlimited AI plans', 'Up to 15 collaborators', 'Core integrations', 'Weekly project briefings'].map((feature) => <div key={feature} {...stylex.props(styles.offerFeature)}><span {...stylex.props(styles.checkCircle)}><img src={checkSmall} alt="" {...stylex.props(styles.checkIcon)} /></span>{feature}</div>)}</div>
          <div {...stylex.props(styles.offerAction)}><a href="mailto:hello@flowly.example" {...stylex.props(styles.button, styles.buttonPrimary, styles.buttonLarge)}>Start free for 14 days <Arrow /></a><span {...stylex.props(styles.actionNote)}>No credit card required</span><a href="mailto:hello@flowly.example" {...stylex.props(styles.contactNote)}>Need more than 15 seats? Talk to us →</a></div>
        </div>
      </section>

      <section {...stylex.props(styles.container, styles.section, styles.white, styles.faq)}>
        <div {...stylex.props(styles.faqIntro)}><div {...stylex.props(styles.sectionIntro)}><Eyebrow>FAQ</Eyebrow><h2 {...stylex.props(styles.sectionTitle)}>Questions, answered clearly.</h2><p {...stylex.props(styles.sectionText)}>Still deciding? We’ll help you understand whether Flowly fits your team.</p></div><a href="mailto:hello@flowly.example" {...stylex.props(styles.button, styles.buttonLarge)}>Talk to a human</a></div>
        <div {...stylex.props(styles.faqList)}>{faqItems.map(([question, answer], index) => {
          const expanded = openFaq === index
          return <article key={question} {...stylex.props(styles.faqItem)}>
            <h3>
              <button type="button" aria-expanded={expanded} onClick={() => setOpenFaq(expanded ? -1 : index)} {...stylex.props(styles.faqQuestion)}>
                <span>{question}</span><img src={expanded ? minus : plus} alt="" {...stylex.props(styles.icon18)} />
              </button>
            </h3>
            {expanded && <p {...stylex.props(styles.faqAnswer)}>{answer}</p>}
          </article>
        })}</div>
      </section>

      <section {...stylex.props(styles.container, styles.section, styles.cta)}>
        <div {...stylex.props(styles.ctaCopy)}><span {...stylex.props(styles.ctaLabel)}>Start with one goal</span><h2 {...stylex.props(styles.ctaTitle)}>Your next project already has a clearer path.</h2></div>
        <div {...stylex.props(styles.ctaAction)}><p {...stylex.props(styles.ctaText)}>Tell Flowly what your team needs to achieve. Get a plan you can use before your next standup.</p><a href="#pricing" {...stylex.props(styles.button, styles.buttonLarge)}>Build my first plan <Arrow /></a><span {...stylex.props(styles.ctaFoot)}>Free for 14 days · No credit card</span></div>
      </section>

      <footer {...stylex.props(styles.container, styles.section, styles.footer)}>
        <div {...stylex.props(styles.footerContent)}>
          <div {...stylex.props(styles.footerBrand)}><Brand footer /><p {...stylex.props(styles.footerText)}>AI project planning for small software teams with ambitious goals.</p></div>
          {[
            ['Product', ['How it works', 'Integrations', 'Pricing']],
            ['Company', ['Customers', 'About', 'Contact']],
            ['Resources', ['Planning guide', 'Security', 'Help center']],
          ].map(([heading, links]) => <div key={heading} {...stylex.props(styles.footerGroup)}><strong {...stylex.props(styles.footerHeading)}>{heading}</strong>{links.map((label) => <a key={label} href={label === 'Pricing' ? '#pricing' : label === 'Customers' ? '#customers' : '#workflow'} {...stylex.props(styles.footerLink)}>{label}</a>)}</div>)}
        </div>
        <div {...stylex.props(styles.legal)}><span>© 2026 Flowly Labs, Inc.</span><div {...stylex.props(styles.legalLinks)}><a href="#top" {...stylex.props(styles.footerLink)}>Privacy</a><a href="#top" {...stylex.props(styles.footerLink)}>Terms</a><a href="#top" {...stylex.props(styles.footerLink)}>System status</a></div></div>
      </footer>
    </main>
  )
}

export default App
