import {getEnvConfig} from "~~/env/env";

const envConfig = getEnvConfig();

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
        iconPath: envConfig.baseUrl + "img/search/bing.png",
        baseUrl: "https://www.bing.com/search?q="
    },
    {
        sourceCode: "wanfang",
        sourceName: "万方",
        iconPath: envConfig.baseUrl + "img/search/wanfang.png",
        baseUrl: "https://s.wanfangdata.com.cn/paper?q="
    },
    {
        sourceCode: "baidu",
        sourceName: "百度学术",
        iconPath: envConfig.baseUrl + "img/search/baidu.png",
        baseUrl: "https://xueshu.baidu.com/s?wd="
    },
    {
        sourceCode: "pubmed",
        sourceName: "PubMed",
        iconPath: envConfig.baseUrl + "img/search/pubmed.png",
        baseUrl: "https://pubmed.ncbi.nlm.nih.gov/?term="
    },
    {
        sourceCode: "github",
        sourceName: "GitHub",
        iconPath: envConfig.baseUrl + "img/search/github.png",
        baseUrl: "https://github.com/search?q="
    },
    {
        sourceCode: "translator",
        sourceName: "在线翻译",
        iconPath: envConfig.baseUrl + "img/search/translator.png",
        baseUrl: "https://www.deepl.com/zh/translator#zh/en-us/"
    }
];

export default searchNodes;