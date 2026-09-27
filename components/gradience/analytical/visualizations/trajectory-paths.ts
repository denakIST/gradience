/*
 * Path data exported verbatim from the approved Figma assets
 * ("Selected trajectory", "Alternative trajectory", Analytical family curves).
 * Stored as data so strokes can be driven by mode-aware tokens.
 */

export type TrajectoryPath = { viewBox: string; d: string }

export const trajectories = {
  selected: {
    viewBox: '0 0 2497 926',
    d: 'M0.39 922.99C487.44 858.42 609.2 584.03 1126.68 616.31C1674.6 648.59 1765.92 132.08 2496.48 2.95',
  },
  alternatives: [
    {
      viewBox: '0 0 2499 923',
      d: 'M1.09 142.44C407.5 567.89 755.86 1276.98 1278.39 709.71C1858.98 71.53 2207.34 638.8 2497.63 0.62',
    },
    {
      viewBox: '0 0 2498 923',
      d: 'M0.7 921.01C581.2 614.32 871.45 997.68 1422.92 537.65C1916.35 192.63 2148.54 422.65 2496.84 0.96',
    },
  ],
} satisfies { selected: TrajectoryPath; alternatives: TrajectoryPath[] }

export const familyPaths = {
  forecastSelected: {
    viewBox: '0 0 604 225',
    d: 'M0.9 221.77C90.98 193.6 125.01 57.9 225.1 103.99C337.2 152.63 353.22 16.93 477.33 22.05C533.38 24.61 565.41 60.46 601.44 1.57',
  },
  forecastAlternative: {
    viewBox: '0 0 603 223',
    d: 'M1.33 221.65C111.41 9.14 193.47 292.49 301.54 79.98C417.62 -123.68 505.68 150.82 601.75 4.71',
  },
  responseCurve: {
    viewBox: '0 0 601 243',
    d: 'M0.19 241.47C144.24 223.2 198.26 171.01 292.3 100.55C408.34 19.65 448.35 66.62 600.41 1.38',
  },
} satisfies Record<string, TrajectoryPath>
