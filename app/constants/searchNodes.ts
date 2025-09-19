/** 搜索节点 */
export interface SearchNode {
    /** 代码 */
    sourceCode: string;
    /** 名称 */
    sourceName: string;
    /** 图标路径 */
    iconPath: string;
    /** 基础地址 */
    baseUrl: string;
}

/** 搜索节点列表 */
const searchNodes: SearchNode[] = [
    {
        sourceCode: "bing",
        sourceName: "必应",
        iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/bing.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=1DihpDCIOSUbhdojrM4Qqb9rtJ4%3D",
        baseUrl: "https://www.bing.com/search?q="
    },
    {
        sourceCode: "wanfang",
        sourceName: "万方",
        iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/wanfang.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=herYzIXk8Paz0%2BJsI6v5%2FDLP5sc%3D",
        baseUrl: "https://s.wanfangdata.com.cn/paper?q="
    },
    {
        sourceCode: "baidu",
        sourceName: "百度学术",
        iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/baidu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=E2HQjFeEB4kPNzwkbYBkO2RCh40%3D",
        baseUrl: "https://xueshu.baidu.com/s?wd="
    },
    {
        sourceCode: "pubmed",
        sourceName: "PubMed",
        iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/pubmed.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=hURETMf4HYF6yOSg1xC601WYaCU%3D",
        baseUrl: "https://pubmed.ncbi.nlm.nih.gov/?term="
    },
    {
        sourceCode: "github",
        sourceName: "GitHub",
        iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/github.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=EHjXbX%2FBi0tQv5pPRgaC7CPBv%2FM%3D",
        baseUrl: "https://github.com/search?q="
    },
    {
        sourceCode: "translator",
        sourceName: "在线翻译",
        iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/translator.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=ODqqnAI7CA70n23%2FPhVNosktKwM%3D",
        baseUrl: "https://www.deepl.com/zh/translator#zh/en-us/"
    }
];

export default searchNodes;