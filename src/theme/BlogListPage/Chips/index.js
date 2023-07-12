import React from 'react';
import { Chip } from '../Chip';
import styles from './styles.module.css';
import { ensureTrailingSlash } from '@site/src/utils/ensureTrailingSlash.js';

export const Chips = ({ items, activeChip }) => (
  <div className={styles.root}>
    {items.map(({ label, permalink }) => (
      <Chip
        key={permalink}
        className={styles.chip}
        label={label}
        permalink={ensureTrailingSlash(permalink)}
        active={activeChip === permalink}
      />
    ))}
  </div>
)
