import moment from 'moment'

export const formatTime = (timestamp: number) => {
	return moment.unix(timestamp).format('YYYY-MM-DD HH:mm:ss')
}