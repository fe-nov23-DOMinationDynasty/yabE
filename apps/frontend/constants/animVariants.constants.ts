import { Variants } from 'framer-motion'

export const animVariants: Variants = {
	// #region Header animation
	// for working need to update isOnTop state based on scrollY position in hook useViewportScroll
	initialHeader: {
		boxShadow: 'none',
		borderRadius: '0px'
	},
	scrolledHeader: {
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
		borderRadius: '48px'
	}
	// #endregion

	// #region NAME animation

	// #endregion
}
