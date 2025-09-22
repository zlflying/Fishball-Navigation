/**
 * 清洗 ID，避免非法字符（SSR/CSR 都安全）
 * @param id 待清理的 ID
 * @returns {string} 清洗后的 ID
 */
export const getSafeId = (id: string | number) => {
    if (!id && id !== 0) return '' // 排除 null, undefined, ''
    return `item-${String(id).replace(/[^a-zA-Z0-9_-]/g, '_')}`
}


