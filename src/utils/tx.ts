export function isSlippageError(tx: any): boolean {
	if (tx && tx.code === 7 && tx.codespace === 'gamm' && tx.log?.includes('token is lesser than min amount')) {
		return true;
	}
	return false;
}
