import { ethers } from 'ethers'

function nFormatter(value: string, digits = 3) {
	const num = Math.abs(Number(value))
	if(num < 10000) {
		return value
	}

	const lookup = [
		{ value: 1, symbol: '' },
		{ value: 1e3, symbol: 'k' },
		{ value: 1e6, symbol: 'M' },
		{ value: 1e9, symbol: 'G' },
		{ value: 1e12, symbol: 'T' },
		{ value: 1e15, symbol: 'P' },
		{ value: 1e18, symbol: 'E' },
	]
	const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
	const item = lookup
		.slice()
		.reverse()
		.find((i) => num >= i.value)
	return item
		? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
		: '0'
}

function truncateTo(number: string, digits = 3) {
	const decimalIndex = number.indexOf('.')
	if(decimalIndex === -1) {
		return number
	}

	let ret = number.substring(0, decimalIndex + 1)
	const lastSymbol = number.charCodeAt(number.length - 1)
	const containsSymbol = !(lastSymbol >= 48 && lastSymbol <= 57)
	let isEntirelyZeroAfterDecimal = true
	for(
		let i = decimalIndex + 1;
		i
        < Math.min(
        	decimalIndex + digits + 1,
        	containsSymbol ? number.length - 1 : number.length,
        );
		i += 1
	) {
		isEntirelyZeroAfterDecimal &&= number.charCodeAt(i) === 48
		ret += number.charAt(i)
	}

	const returnValue = (isEntirelyZeroAfterDecimal ? ret.substring(0, decimalIndex) : ret)
        + (containsSymbol ? number.charAt(number.length - 1) : '')
	return returnValue
}

export default function formatAmount(
	number: string,
	decimals = 18,
	isEditable = false,
) {
	const value = ethers.utils.formatUnits(number, decimals).toString()
	if(isEditable) {
		return truncateTo(value, decimals)
	}

	const formattedValue = nFormatter(value)
	return truncateTo(formattedValue)
}
