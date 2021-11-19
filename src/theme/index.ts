//  chakraUIで

import { extendTheme, theme, withDefaultVariant } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
const inputSelectStyles = {
	variants: {
		outline: {
			field: {
				borderRadius: 'none',
				_focus: {
					borderColor: theme.colors.teal[500],
					ring: 'none',
				},
			},
		},
	},
}

const custumTheme = extendTheme({
	fonts: {
		heading: `Montserrat, ${theme.fonts.heading}`,
		body: `Inter, ${theme.fonts.body}`,
	},
	components: {
		Input: { ...inputSelectStyles },
		Select: { ...inputSelectStyles },
		Button: {
			variants: {
				solid: {
					borderRadius: 'none',
					bg: theme.colors.blue[500],
					color: theme.colors.white,
					ring: 'none',
					_hover: {
						color: theme.colors.white,
						bg: theme.colors.blue[300],
					},
					_focus: {
						ring: 'none',
					},
					_active: {
						color: theme.colors.white,
						bg: theme.colors.teal[500],
						shadow: `${theme.shadows['dark-lg']}`,
					},
				},
			},
		},
	},
})

export default custumTheme
