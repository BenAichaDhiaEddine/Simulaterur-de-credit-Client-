import Cookies from 'js-cookie'
/**
 * Confirms if there is a connected user or not
 *
 * @returns {boolean}
 */
export const isLoggedIn = () => {
	return Cookies.get('S_A_TOKEN') ? true : false;
};