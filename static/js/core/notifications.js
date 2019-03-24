import { notification } from 'antd'
import '../../css/core/notifications/notifications.css';
import '../../css/core/notifications/overrides.css';

// @type is one of: success, error, info, warning, warn, loading
/**
 * Opens a message/notification on the top of the page.
 * @param {String} type - The type of the message, one of 'success', 'error', 'info'.
 * @param {ReactNode|String} text - The text of the message. Can also be a ReactNode (rarely).
 * @param {Number} durationSeconds - For how long should the message appear, in seconds.
 */
export default function openBasicMessage (type, text, durationSeconds = 3) {
    notification[type]({message: text, duration: durationSeconds})
}