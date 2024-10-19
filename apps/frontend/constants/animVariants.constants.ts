import { Variants } from 'framer-motion'

export const animVariants: Variants = {
	// #region Header animation
	// for working need to update isOnTop state based on scrollY position in hook useViewportScroll
	initialHeader: {
		boxShadow: 'none',
		borderRadius: '0px'
	},
	scrolledHeader: {
		boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.25)',
		borderRadius: '48px'
	},
	// #endregion

	// #region Dropdown animation
	openDropdown: {
		clipPath: 'inset(0% 0% 0% 0% round 10px)',
		transition: {
			type: 'spring',
			bounce: 0,
			duration: 0.7,
			delayChildren: 0.3,
			staggerChildren: 0.05
		}
	},
	closedDropdown: {
		clipPath: 'inset(10% 50% 90% 50% round 10px)',
		transition: {
			type: 'spring',
			bounce: 0,
			duration: 0.3
		}
	},
	openItemDropdown: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 300, damping: 24 }
	},
	closedItemDropdown: { opacity: 0, y: 20, transition: { duration: 0.2 } }
	// #endregion
}
