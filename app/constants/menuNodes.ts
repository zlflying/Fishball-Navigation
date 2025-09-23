import {getEnvConfig} from "~~/env/env";

const envConfig = getEnvConfig();

/** 菜单节点 */
export interface MenuNode {
    /** 节点ID */
    nodeId: string;
    /** 节点名称 */
    displayName: string;
    /** 节点类型 */
    nodeType: "MENU" | "ITEM",
    /** 节点图标 */
    iconPath: string | null;
    /** 节点子节点 */
    children: MenuNode[];
    /** 菜单项 */
    items: MenuItem[]
}

/** 菜单项 */
export interface MenuItem {
    /** 菜单项ID */
    itemId: string;
    /** 菜单项名称 */
    displayName: string;
    /** 菜单项描述 */
    description: string;
    /** 菜单项图标 */
    logoPath: string;
    /** 网站地址 */
    websiteUrl: string;
    /** 跳转方式 */
    redirectType: "DETAIL" | "DETAIL_HOT"
}

/** 通用科学节点列表 */
export const commonMenuNodes: MenuNode[] = [
    {
        nodeId: "1e3f7e1d-3c37-11f0-ba03-bc24117649c5",
        displayName: "鱼丸推荐",
        nodeType: "MENU",
        iconPath: "line-md:thumbs-up",
        children: [],
        items: [{
            itemId: "f86eec59-685e-4840-a22f-7fa0b3191391",
            displayName: "中国知网（CNKI）",
            description: "中国最大的学术论文数据库",
            logoPath: envConfig.baseUrl + "img/menu/中国知网（CNKI）.png",
            websiteUrl: "https://www.cnki.net/",
            redirectType: "DETAIL"
        }, {
            itemId: "63939833-32e0-489a-811a-cf10791346a5",
            displayName: "维普中文期刊",
            description: "工程技术文献占优、支持同义词扩展检索",
            logoPath: envConfig.baseUrl + "img/menu/维普中文期刊.png",
            websiteUrl: "https://qikan.cqvip.com",
            redirectType: "DETAIL"
        }, {
            itemId: "ae45741a-a0fa-4932-9372-bbdb61750513",
            displayName: "国家科技图书文献中心（NSTL）",
            description: "集成中科院、工程院等资源",
            logoPath: envConfig.baseUrl + "img/menu/国家科技图书文献中心（NSTL）.png",
            websiteUrl: "https://www.nstl.gov.cn",
            redirectType: "DETAIL"
        }, {
            itemId: "d23b1130-4883-435a-91fd-163c675089d4",
            displayName: "Web of Science",
            description: "获取自然科学领域最权威、最前沿的科研信息",
            logoPath: envConfig.baseUrl + "img/menu/WebofScience.png",
            websiteUrl: "https://www.webofscience.com",
            redirectType: "DETAIL"
        }, {
            itemId: "076c4c13-a5d5-488e-9f9d-4f0586049006",
            displayName: "NoteExpress",
            description: "论文写作时的参考文献管理",
            logoPath: envConfig.baseUrl + "img/menu/NoteExpress.png",
            websiteUrl: "https://jc.inoteexpress.com/dynamo/index.html",
            redirectType: "DETAIL"
        }, {
            itemId: "2941135d-4e52-4408-8293-fd1060f8f3a9",
            displayName: "学信网查重",
            description: "权威，本科 / 硕博适用",
            logoPath: envConfig.baseUrl + "img/menu/学信网查重.png",
            websiteUrl: "https://chsi.wanfangtech.net",
            redirectType: "DETAIL"
        }, {
            itemId: "7135ffe4-3be2-4d67-8251-f8af0b773ed5",
            displayName: "ScienceDirect",
            description: "是全球最大的科学、技术与医学全文电子资源数据库",
            logoPath: envConfig.baseUrl + "img/menu/ScienceDirect.png",
            websiteUrl: "https://www.sciencedirect.com",
            redirectType: "DETAIL"
        }, {
            itemId: "b6217b2c-edaa-4678-8e86-00ba7dd547f3",
            displayName: "arXiv",
            description: "全球最大的预印本平台之一，及时了解这些领域的最新研究动态和成果",
            logoPath: envConfig.baseUrl + "img/menu/arXiv.png",
            websiteUrl: "http://arxiv.org/",
            redirectType: "DETAIL"
        }]
    }, {
        nodeId: "126d7780-3c77-11f0-9b5b-bc24117649c5",
        displayName: "中文文献",
        nodeType: "MENU",
        iconPath: "line-md:text-box-multiple",
        children: [{
            nodeId: "ca4937d2-57d9-4a06-a778-ba1c33098587",
            displayName: "自然科学",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/自然科学.png",
            children: [],
            items: [{
                itemId: "e6ffeebd-3c3c-11f0-ba03-bc24117649c5",
                displayName: "中国知网（CNKI）",
                description: "中国最大的学术论文数据库",
                logoPath: envConfig.baseUrl + "img/menu/中国知网（CNKI）.png",
                websiteUrl: "https://www.cnki.net/",
                redirectType: "DETAIL"
            }, {
                itemId: "41d38591-3d20-11f0-9b5b-bc24117649c5",
                displayName: "国家科技图书文献中心（NSTL）",
                description: "集成中科院、工程院等资源",
                logoPath: envConfig.baseUrl + "img/menu/国家科技图书文献中心（NSTL）.png",
                websiteUrl: "https://www.nstl.gov.cn",
                redirectType: "DETAIL"
            }, {
                itemId: "8143e503-8077-42dd-8ebe-71b1bc9cf41b",
                displayName: "维普中文期刊",
                description: "工程技术文献占优、支持同义词扩展检索",
                logoPath: envConfig.baseUrl + "img/menu/维普中文期刊.png",
                websiteUrl: "https://qikan.cqvip.com",
                redirectType: "DETAIL"
            }, {
                itemId: "524c18b0-e19e-42e5-a59a-caca6fde3dcd",
                displayName: "国家科技图书文献中心（NSTL）",
                description: "集成中科院、工程院等资源",
                logoPath: envConfig.baseUrl + "img/menu/国家科技图书文献中心（NSTL）.png",
                websiteUrl: "https://www.nstl.gov.cn",
                redirectType: "DETAIL"
            }, {
                itemId: "7ae3d556-5159-4944-b9bb-ff0c6a279b2f",
                displayName: "中国科学引文数据库（CSCD）",
                description: "我国第一个引文数据库",
                logoPath: envConfig.baseUrl + "img/menu/中国科学引文数据库（CSCD）.png",
                websiteUrl: "http://sciencechina.cn",
                redirectType: "DETAIL"
            }, {
                itemId: "4a914924-d878-4936-a5cb-7cc7e43a70ac",
                displayName: "中国生物医学文献服务系统",
                description: "生物医学中外文整合检索平台",
                logoPath: envConfig.baseUrl + "img/menu/中国生物医学文献服务系统.png",
                websiteUrl: "https://www.sinomed.ac.cn/index.jsp",
                redirectType: "DETAIL"
            }, {
                itemId: "45e9a6db-efa1-4fc7-861a-a8dae487cc75",
                displayName: "国家自然科学基金知识库",
                description: "获取中文前沿研究数据（材料/环境科学/化学为主）",
                logoPath: envConfig.baseUrl + "img/menu/国家自然科学基金知识库.png",
                websiteUrl: "https://kd.nsfc.cn/",
                redirectType: "DETAIL"
            }, {
                itemId: "b2156a81-be3f-4ec1-81c1-7df1d58865e4",
                displayName: "超星期刊",
                description: "全终端智能化学术期刊库",
                logoPath: envConfig.baseUrl + "img/menu/超星期刊.png",
                websiteUrl: "https://www.chaoxing.com",
                redirectType: "DETAIL"
            }, {
                itemId: "c47ed9ae-ec95-4290-86bf-0aa308942742",
                displayName: "中华医学期刊",
                description: "中华医学会权威综合性医学期刊",
                logoPath: envConfig.baseUrl + "img/menu/中华医学期刊.png",
                websiteUrl: "https://www.yiigle.com/index",
                redirectType: "DETAIL"
            }, {
                itemId: "e429664d-4bde-47a9-a294-76d3834c09dc",
                displayName: "中国国家数字图书馆",
                description: "国家级数字阅读资源中心",
                logoPath: envConfig.baseUrl + "img/menu/中国国家数字图书馆.png",
                websiteUrl: "https://www.nlc.cn/web/index.shtml",
                redirectType: "DETAIL"
            }, {
                itemId: "b198590c-67e4-45f6-8298-f7ff72b95b9d",
                displayName: "万方数据库",
                description: "综合性强、数据更新快",
                logoPath: envConfig.baseUrl + "img/menu/万方数据库.png",
                websiteUrl: "https://www.wanfangdata.com.cn/",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "96b2b199-aae4-4b5c-97a4-e7323f2cd5c6",
            displayName: "交叉学科",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/交叉学科.png",
            children: [],
            items: [{
                itemId: "e69feebd-3c3c-11f0-ba03-bc24117649c5",
                displayName: "中国知网（CNKI）",
                description: "中国最大的学术论文数据库",
                logoPath: envConfig.baseUrl + "img/menu/中国知网（CNKI）.png",
                websiteUrl: "https://www.cnki.net/",
                redirectType: "DETAIL"
            }, {
                itemId: "8343e503-8077-42dd-8ebe-71b1bc9cf41b",
                displayName: "维普中文期刊",
                description: "工程技术文献占优、支持同义词扩展检索",
                logoPath: envConfig.baseUrl + "img/menu/维普中文期刊.png",
                websiteUrl: "https://qikan.cqvip.com",
                redirectType: "DETAIL"
            }, {
                itemId: "7ae4d556-5159-4944-b9bb-ff0c6a279b2f",
                displayName: "中国科学引文数据库（CSCD）",
                description: "我国第一个引文数据库",
                logoPath: envConfig.baseUrl + "img/menu/中国科学引文数据库（CSCD）.png",
                websiteUrl: "http://sciencechina.cn",
                redirectType: "DETAIL"
            }, {
                itemId: "d28a69c8-e5df-47d7-bdd6-89aa4e1539f9",
                displayName: "寻知学术文献数据检索平台",
                description: "方便、快捷地发现所需的交叉学科知识和文献情报信息",
                logoPath: envConfig.baseUrl + "img/menu/寻知学术文献数据检索平台.png",
                websiteUrl: "https://xunzhi.kingbooks.com.cn/",
                redirectType: "DETAIL"
            }, {
                itemId: "b598590c-67e4-45f6-8298-f7ff72b95b9d",
                displayName: "万方数据库",
                description: "综合性强、数据更新快",
                logoPath: envConfig.baseUrl + "img/menu/万方数据库.png",
                websiteUrl: "https://www.wanfangdata.com.cn/",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "86aa9faf-4500-498e-afa1-edea58a9a873",
            displayName: "人文科学",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/人文科学.png",
            children: [],
            items: [{
                itemId: "e68feebd-3c3c-11f0-ba03-bc24117649c5",
                displayName: "中国知网（CNKI）",
                description: "中国最大的学术论文数据库",
                logoPath: envConfig.baseUrl + "img/menu/中国知网（CNKI）.png",
                websiteUrl: "https://www.cnki.net/",
                redirectType: "DETAIL"
            }, {
                itemId: "46d894d5-369b-4db6-82f3-006d340828c7",
                displayName: "中文社会科学引文索引（CSSCI）",
                description: "检索中文人文社会科学领域论文收录和被引用情况的引文数据库",
                logoPath: envConfig.baseUrl + "img/menu/中文社会科学引文索引（CSSCI）.png",
                websiteUrl: "http://cssci.nju.edu.cn/login_u.html",
                redirectType: "DETAIL"
            }, {
                itemId: "66be8e23-3d9a-4c56-a0dc-ef9de43a41ae",
                displayName: "读秀学术搜索",
                description: "海量全文数据及元数据组成的超大型数据库",
                logoPath: envConfig.baseUrl + "img/menu/读秀学术搜索.png",
                websiteUrl: "https://www.duxiu.com/",
                redirectType: "DETAIL"
            }, {
                itemId: "b498590c-67e4-45f6-8298-f7ff72b95b9d",
                displayName: "万方数据库",
                description: "综合性强、数据更新快",
                logoPath: envConfig.baseUrl + "img/menu/万方数据库.png",
                websiteUrl: "https://www.wanfangdata.com.cn/",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "5a18568d-75b1-45dc-a8fe-4cef1617b102",
            displayName: "社会科学",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/社会科学.png",
            children: [],
            items: [{
                itemId: "e67feebd-3c3c-11f0-ba03-bc24117649c5",
                displayName: "中国知网（CNKI）",
                description: "中国最大的学术论文数据库",
                logoPath: envConfig.baseUrl + "img/menu/中国知网（CNKI）.png",
                websiteUrl: "https://www.cnki.net/",
                redirectType: "DETAIL"
            }, {
                itemId: "45d894d5-369b-4db6-82f3-006d340828c7",
                displayName: "中文社会科学引文索引（CSSCI）",
                description: "检索中文人文社会科学领域论文收录和被引用情况的引文数据库",
                logoPath: envConfig.baseUrl + "img/menu/中文社会科学引文索引（CSSCI）.png",
                websiteUrl: "http://cssci.nju.edu.cn/login_u.html",
                redirectType: "DETAIL"
            }, {
                itemId: "2bf93263-690e-495c-9a0f-a5dd6fbb5cd9",
                displayName: "国家哲学社会科学文献中心 (NSSD)",
                description: "免费开放，覆盖哲学、经济学、法学等8大学科",
                logoPath: envConfig.baseUrl + "img/menu/国家哲学社会科学文献中心(NSSD).png",
                websiteUrl: "https://www.ncpssd.org",
                redirectType: "DETAIL"
            }, {
                itemId: "8f735e4d-a09a-4008-9cb4-ca0f734c0850",
                displayName: "人大复印报刊资料",
                description: "国内公开出版的人文社会科学领域的重要报刊文章",
                logoPath: envConfig.baseUrl + "img/menu/人大复印报刊资料.png",
                websiteUrl: "http://www.rdfybk.com",
                redirectType: "DETAIL"
            }, {
                itemId: "e520ca0b-406e-46f7-a932-968013909b11",
                displayName: "中国心理科学信息中心",
                description: "中国心理学研究成果专著",
                logoPath: envConfig.baseUrl + "img/menu/中国心理科学信息中心.png",
                websiteUrl: "https://lib.psych.ac.cn/library/home/index",
                redirectType: "DETAIL"
            }, {
                itemId: "b398590c-67e4-45f6-8298-f7ff72b95b9d",
                displayName: "万方数据库",
                description: "综合性强、数据更新快",
                logoPath: envConfig.baseUrl + "img/menu/万方数据库.png",
                websiteUrl: "https://www.wanfangdata.com.cn/",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "3168f446-587b-4f0a-a14a-956b6e3ed831",
            displayName: "工程技术",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/工程技术.png",
            children: [],
            items: [{
                itemId: "e66feebd-3c3c-11f0-ba03-bc24117649c5",
                displayName: "中国知网（CNKI）",
                description: "中国最大的学术论文数据库",
                logoPath: envConfig.baseUrl + "img/menu/中国知网（CNKI）.png",
                websiteUrl: "https://www.cnki.net/",
                redirectType: "DETAIL"
            }, {
                itemId: "8243e503-8077-42dd-8ebe-71b1bc9cf41b",
                displayName: "维普中文期刊",
                description: "工程技术文献占优、支持同义词扩展检索",
                logoPath: envConfig.baseUrl + "img/menu/维普中文期刊.png",
                websiteUrl: "https://qikan.cqvip.com",
                redirectType: "DETAIL"
            }, {
                itemId: "534c18b0-e19e-42e5-a59a-caca6fde3dcd",
                displayName: "国家科技图书文献中心（NSTL）",
                description: "集成中科院、工程院等资源",
                logoPath: envConfig.baseUrl + "img/menu/国家科技图书文献中心（NSTL）.png",
                websiteUrl: "https://www.nstl.gov.cn",
                redirectType: "DETAIL"
            }, {
                itemId: "b298590c-67e4-45f6-8298-f7ff72b95b9d",
                displayName: "万方数据库",
                description: "综合性强、数据更新快",
                logoPath: envConfig.baseUrl + "img/menu/万方数据库.png",
                websiteUrl: "https://www.wanfangdata.com.cn/",
                redirectType: "DETAIL"
            }, {
                itemId: "d43b9d17-086c-4652-bea1-bbf12aafb4f1",
                displayName: "Semantic Scholar",
                description: "覆盖AI/系统领域研究趋势分析、关联文献挖掘",
                logoPath: envConfig.baseUrl + "img/menu/SemanticScholar.png",
                websiteUrl: "https://www.semanticscholar.org",
                redirectType: "DETAIL"
            }]
        }],
        items: [{
            itemId: "ba98590c-67e4-45f6-8298-f7ff72b95b9d",
            displayName: "万方数据库",
            description: "综合性强、数据更新快",
            logoPath: envConfig.baseUrl + "img/menu/万方数据库.png",
            websiteUrl: "https://www.wanfangdata.com.cn/",
            redirectType: "DETAIL"
        }, {
            itemId: "8043e503-8077-42dd-8ebe-71b1bc9cf41b",
            displayName: "维普中文期刊",
            description: "工程技术文献占优、支持同义词扩展检索",
            logoPath: envConfig.baseUrl + "img/menu/维普中文期刊.png",
            websiteUrl: "https://qikan.cqvip.com",
            redirectType: "DETAIL"
        }, {
            itemId: "514c18b0-e19e-42e5-a59a-caca6fde3dcd",
            displayName: "国家科技图书文献中心（NSTL）",
            description: "集成中科院、工程院等资源",
            logoPath: envConfig.baseUrl + "img/menu/国家科技图书文献中心（NSTL）.png",
            websiteUrl: "https://www.nstl.gov.cn",
            redirectType: "DETAIL"
        }, {
            itemId: "d4b344d0-34da-434a-93e3-6899cdc5deb7",
            displayName: "中国知网（CNKI）",
            description: "中国最大的学术论文数据库",
            logoPath: envConfig.baseUrl + "img/menu/中国知网（CNKI）.png",
            websiteUrl: "https://www.cnki.net/",
            redirectType: "DETAIL"
        }, {
            itemId: "44e9a6db-efa1-4fc7-861a-a8dae487cc75",
            displayName: "国家自然科学基金知识库",
            description: "获取中文前沿研究数据（材料/环境科学/化学为主）",
            logoPath: envConfig.baseUrl + "img/menu/国家自然科学基金知识库.png",
            websiteUrl: "https://kd.nsfc.cn/",
            redirectType: "DETAIL"
        }, {
            itemId: "7ae2d556-5159-4944-b9bb-ff0c6a279b2f",
            displayName: "中国科学引文数据库（CSCD）",
            description: "我国第一个引文数据库",
            logoPath: envConfig.baseUrl + "img/menu/中国科学引文数据库（CSCD）.png",
            websiteUrl: "http://sciencechina.cn",
            redirectType: "DETAIL"
        }, {
            itemId: "3a914924-d878-4936-a5cb-7cc7e43a70ac",
            displayName: "中国生物医学文献服务系统",
            description: "生物医学中外文整合检索平台",
            logoPath: envConfig.baseUrl + "img/menu/中国生物医学文献服务系统.png",
            websiteUrl: "https://www.sinomed.ac.cn/index.jsp",
            redirectType: "DETAIL"
        }, {
            itemId: "b2056a81-be3f-4ec1-81c1-7df1d58865e4",
            displayName: "超星期刊",
            description: "全终端智能化学术期刊库",
            logoPath: envConfig.baseUrl + "img/menu/超星期刊.png",
            websiteUrl: "https://www.chaoxing.com",
            redirectType: "DETAIL"
        }, {
            itemId: "c37ed9ae-ec95-4290-86bf-0aa308942742",
            displayName: "中华医学期刊",
            description: "中华医学会权威综合性医学期刊",
            logoPath: envConfig.baseUrl + "img/menu/中华医学期刊.png",
            websiteUrl: "https://www.yiigle.com/index",
            redirectType: "DETAIL"
        }, {
            itemId: "e419664d-4bde-47a9-a294-76d3834c09dc",
            displayName: "中国国家数字图书馆",
            description: "国家级数字阅读资源中心",
            logoPath: envConfig.baseUrl + "img/menu/中国国家数字图书馆.png",
            websiteUrl: "https://www.nlc.cn/web/index.shtml",
            redirectType: "DETAIL"
        }, {
            itemId: "e510ca0b-406e-46f7-a932-968013909b11",
            displayName: "中国心理科学信息中心",
            description: "中国心理学研究成果专著",
            logoPath: envConfig.baseUrl + "img/menu/中国心理科学信息中心.png",
            websiteUrl: "https://lib.psych.ac.cn/library/home/index",
            redirectType: "DETAIL"
        }, {
            itemId: "44d894d5-369b-4db6-82f3-006d340828c7",
            displayName: "中文社会科学引文索引（CSSCI）",
            description: "检索中文人文社会科学领域论文收录和被引用情况的引文数据库",
            logoPath: envConfig.baseUrl + "img/menu/中文社会科学引文索引（CSSCI）.png",
            websiteUrl: "http://cssci.nju.edu.cn/login_u.html",
            redirectType: "DETAIL"
        }, {
            itemId: "8f725e4d-a09a-4008-9cb4-ca0f734c0850",
            displayName: "人大复印报刊资料",
            description: "国内公开出版的人文社会科学领域的重要报刊文章",
            logoPath: envConfig.baseUrl + "img/menu/人大复印报刊资料.png",
            websiteUrl: "http://www.rdfybk.com",
            redirectType: "DETAIL"
        }, {
            itemId: "1bf93263-690e-495c-9a0f-a5dd6fbb5cd9",
            displayName: "国家哲学社会科学文献中心 (NSSD)",
            description: "免费开放，覆盖哲学、经济学、法学等8大学科",
            logoPath: envConfig.baseUrl + "img/menu/国家哲学社会科学文献中心(NSSD).png",
            websiteUrl: "https://www.ncpssd.org",
            redirectType: "DETAIL"
        }, {
            itemId: "65be8e23-3d9a-4c56-a0dc-ef9de43a41ae",
            displayName: "读秀学术搜索",
            description: "海量全文数据及元数据组成的超大型数据库",
            logoPath: envConfig.baseUrl + "img/menu/读秀学术搜索.png",
            websiteUrl: "https://www.duxiu.com/",
            redirectType: "DETAIL"
        }, {
            itemId: "d27a69c8-e5df-47d7-bdd6-89aa4e1539f9",
            displayName: "寻知学术文献数据检索平台",
            description: "方便、快捷地发现所需的交叉学科知识和文献情报信息",
            logoPath: envConfig.baseUrl + "img/menu/寻知学术文献数据检索平台.png",
            websiteUrl: "https://xunzhi.kingbooks.com.cn/",
            redirectType: "DETAIL"
        }]
    }, {
        nodeId: "1300200a-3c77-11f0-9b5b-bc24117649c5",
        displayName: "英文文献",
        nodeType: "MENU",
        iconPath: "line-md:text-box-multiple-twotone",
        children: [{
            nodeId: "cbe8a570-19c5-469d-94d7-07637d310884",
            displayName: "交叉学科",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/交叉学科.png",
            children: [],
            items: [{
                itemId: "58eb1c54-fbb4-445f-9917-e1c83d9519ff",
                displayName: "Web of Science",
                description: "获取自然科学领域最权威、最前沿的科研信息",
                logoPath: envConfig.baseUrl + "img/menu/WebofScience.png",
                websiteUrl: "https://www.webofscience.com",
                redirectType: "DETAIL"
            }, {
                itemId: "6d4035e8-3913-4893-ba25-ee143658c767",
                displayName: "Scopus",
                description: "全球最大的同行评议学术论文摘要和引文数据库",
                logoPath: envConfig.baseUrl + "img/menu/Scopus.png",
                websiteUrl: "https://www.scopus.com/home.uri",
                redirectType: "DETAIL"
            }, {
                itemId: "da020e45-377f-4a71-ad38-2568b372e89a",
                displayName: "ScienceDirect",
                description: "是全球最大的科学、技术与医学全文电子资源数据库",
                logoPath: envConfig.baseUrl + "img/menu/ScienceDirect.png",
                websiteUrl: "https://www.sciencedirect.com",
                redirectType: "DETAIL"
            }, {
                itemId: "bee96b6a-7b06-4c98-9bd8-67a939977384",
                displayName: "ProQuest",
                description: "收录欧美多国大学的硕博士论文，支持跨学科检索",
                logoPath: envConfig.baseUrl + "img/menu/ProQuest.png",
                websiteUrl: "https://about.proquest.com/zh/",
                redirectType: "DETAIL"
            }, {
                itemId: "2211871e-08ab-4aa2-9ab3-3024b1bcdfec",
                displayName: "BASE",
                description: "提供对全球异构学术资源的集成检索服务",
                logoPath: envConfig.baseUrl + "img/menu/BASE.png",
                websiteUrl: "http://www.base-search.net/",
                redirectType: "DETAIL"
            }, {
                itemId: "c06c19c2-e407-4b27-91ae-3f90e3462dfc",
                displayName: "Sage Research Methods",
                description: "适合跨学科方法设计 | 方法学整合",
                logoPath: envConfig.baseUrl + "img/menu/SageResearchMethods.png",
                websiteUrl: "https://methods.sagepub.com",
                redirectType: "DETAIL"
            }, {
                itemId: "e8250d46-41da-48cd-a505-248d278c3304",
                displayName: "EBSCO",
                description: "多学科学术数据库",
                logoPath: envConfig.baseUrl + "img/menu/EBSCO.png",
                websiteUrl: "http://search.ebscohost.com",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "cbe8a570-19c5-469d-94d7-07637d310883",
            displayName: "人文科学",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/人文科学.png",
            children: [],
            items: [{
                itemId: "72ac02f4-ae58-4ac7-a133-95cd603c835d",
                displayName: "Web of Science",
                description: "获取自然科学领域最权威、最前沿的科研信息",
                logoPath: envConfig.baseUrl + "img/menu/WebofScience.png",
                websiteUrl: "https://www.webofscience.com",
                redirectType: "DETAIL"
            }, {
                itemId: "68205fe9-f4f3-49f1-82a1-944e8754a4c4",
                displayName: "Project MUSE",
                description: "人文科学研究的重要资源之一",
                logoPath: envConfig.baseUrl + "img/menu/ProjectMUSE.png",
                websiteUrl: "https://about.muse.jhu.edu/librarians/",
                redirectType: "DETAIL"
            }, {
                itemId: "e42589c5-310a-43b1-bc5a-93bfea9d29c3",
                displayName: "JSTOR",
                description: "涵盖人文、社会科学和自然科学领域的期刊文献",
                logoPath: envConfig.baseUrl + "img/menu/JSTOR.png",
                websiteUrl: "https://www.jstor.org",
                redirectType: "DETAIL"
            }, {
                itemId: "2f7d1b4e-e618-4757-bad5-f66b2e7e18c4",
                displayName: "HeinOnline",
                description: "全球最大法律文献库",
                logoPath: envConfig.baseUrl + "img/menu/HeinOnline.png",
                websiteUrl: "https://home.heinonline.org/",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "cbe8a570-19c5-469d-94d7-07637d310882",
            displayName: "社会科学",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/社会科学.png",
            children: [],
            items: [{
                itemId: "28fba66a-b3d0-433d-8faa-a0754bba7cbd",
                displayName: "Web of Science",
                description: "获取自然科学领域最权威、最前沿的科研信息",
                logoPath: envConfig.baseUrl + "img/menu/WebofScience.png",
                websiteUrl: "https://www.webofscience.com",
                redirectType: "DETAIL"
            }, {
                itemId: "44534b02-567c-4595-bdd9-17287517dbe2",
                displayName: "JSTOR",
                description: "涵盖人文、社会科学和自然科学领域的期刊文献",
                logoPath: envConfig.baseUrl + "img/menu/JSTOR.png",
                websiteUrl: "https://www.jstor.org",
                redirectType: "DETAIL"
            }, {
                itemId: "df1cf674-ea55-4d1a-9398-c6751f62f9e2",
                displayName: "ProQuest",
                description: "收录欧美多国大学的硕博士论文，支持跨学科检索",
                logoPath: envConfig.baseUrl + "img/menu/ProQuest.png",
                websiteUrl: "https://about.proquest.com/zh/",
                redirectType: "DETAIL"
            }, {
                itemId: "93be835c-2ec8-4e9c-83d4-de7ccd924552",
                displayName: "Wiley Online Library",
                description: "全球领先的学协会出版商",
                logoPath: envConfig.baseUrl + "img/menu/WileyOnlineLibrary.png",
                websiteUrl: "https://onlinelibrary.wiley.com",
                redirectType: "DETAIL"
            }, {
                itemId: "2626f2b2-245f-46c7-b104-9b2af5d63c42",
                displayName: "Cambridge Journals Online",
                description: "剑桥大学出版社的期刊在线平台",
                logoPath: envConfig.baseUrl + "img/menu/CambridgeJournalsOnline.png",
                websiteUrl: "https://www.cambridge.org/core",
                redirectType: "DETAIL"
            }, {
                itemId: "ec02b02a-927f-4d41-bb89-e6f4de0681d3",
                displayName: "SSRN",
                description: "济学、法学预印本平台，可免费下载工作论文",
                logoPath: envConfig.baseUrl + "img/menu/SSRN.png",
                websiteUrl: "https://www.ssrn.com/index.cfm/en/",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "cbe8a570-19c5-469d-94d7-07637d310881",
            displayName: "工程技术",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/工程技术.png",
            children: [],
            items: [{
                itemId: "c3ded221-b663-44fd-9836-032cb7d7cf15",
                displayName: "IEEE Xplore",
                description: "电气电子工程、计算机科学等领域的权威文献数据库",
                logoPath: envConfig.baseUrl + "img/menu/IEEEXplore.png",
                websiteUrl: "https://developer.ieee.org",
                redirectType: "DETAIL"
            }, {
                itemId: "256988a7-523b-4972-b7e5-f5f801975524",
                displayName: "ScienceDirect",
                description: "是全球最大的科学、技术与医学全文电子资源数据库",
                logoPath: envConfig.baseUrl + "img/menu/ScienceDirect.png",
                websiteUrl: "https://www.sciencedirect.com",
                redirectType: "DETAIL"
            }, {
                itemId: "07154ed7-0010-4901-887e-29cc8ffde4b4",
                displayName: "ASME Digital Library",
                description: "美国机械工程师学会资源",
                logoPath: envConfig.baseUrl + "img/menu/ASMEDigitalLibrary.png",
                websiteUrl: "https://asmedigitalcollection.asme.org",
                redirectType: "DETAIL"
            }, {
                itemId: "9dedd8b8-82e3-45f2-be2c-f057e0cf4a9c",
                displayName: "Materials Science & Engineering Database",
                description: "专注材料性能与工艺",
                logoPath: envConfig.baseUrl + "img/menu/MaterialsScience&EngineeringDatabase.png",
                websiteUrl: "https://mse.engineering.cmu.edu",
                redirectType: "DETAIL"
            }, {
                itemId: "32d902a8-be7b-42fa-8470-c9df31bac9bb",
                displayName: "ACM Digital Library",
                description: "计算机协会资源，算法/AI领域权威",
                logoPath: envConfig.baseUrl + "img/menu/ACMDigitalLibrary.png",
                websiteUrl: "https://www.acm.org/publications/digital-library",
                redirectType: "DETAIL"
            }, {
                itemId: "6656b931-2cd1-494b-b386-7833cab0df9b",
                displayName: "DOAJ",
                description: "开源期刊库，含工程技术类OA期刊",
                logoPath: envConfig.baseUrl + "img/menu/DOAJ.png",
                websiteUrl: "https://doaj.org",
                redirectType: "DETAIL"
            }, {
                itemId: "4699cd20-7a40-4247-a924-ccd5492892aa",
                displayName: "Engineering Village",
                description: "工程技术领域的综合性检索工具",
                logoPath: envConfig.baseUrl + "img/menu/EngineeringVillage.png",
                websiteUrl: "https://www.elsevier.cn/products/engineering-village/",
                redirectType: "DETAIL"
            }, {
                itemId: "50a991d4-8372-43b6-906f-dc9b7f9c4c7f",
                displayName: "Web of Science",
                description: "获取自然科学领域最权威、最前沿的科研信息",
                logoPath: envConfig.baseUrl + "img/menu/WebofScience.png",
                websiteUrl: "https://www.webofscience.com",
                redirectType: "DETAIL"
            }, {
                itemId: "fbbe6f07-edd7-4e05-bbce-d7a9e8b0189f",
                displayName: "Scopus",
                description: "全球最大的同行评议学术论文摘要和引文数据库",
                logoPath: envConfig.baseUrl + "img/menu/Scopus.png",
                websiteUrl: "https://www.scopus.com/home.uri",
                redirectType: "DETAIL"
            }, {
                itemId: "00bed980-cb03-403c-97d8-7d6f68941f2c",
                displayName: "SpringerLink",
                description: "综合性的在线学术资源平台",
                logoPath: envConfig.baseUrl + "img/menu/SpringerLink.png",
                websiteUrl: "https://link.springer.com",
                redirectType: "DETAIL"
            }, {
                itemId: "f8b05aaa-6ab6-4b05-b8de-e8e759074312",
                displayName: "ASME Digital Library",
                description: "美国机械工程师学会资源",
                logoPath: envConfig.baseUrl + "img/menu/ASMEDigitalLibrary.png",
                websiteUrl: "https://asmedigitalcollection.asme.org",
                redirectType: "DETAIL"
            }, {
                itemId: "31ff858d-ce30-4453-8c72-77def690961f",
                displayName: "ASCE Library",
                description: "美国土木工程师学会全文库",
                logoPath: envConfig.baseUrl + "img/menu/ASCELibrary.png",
                websiteUrl: "https://ascelibrary.org",
                redirectType: "DETAIL"
            }, {
                itemId: "3e87a6b1-f926-4fd3-b069-8650ec52d2ed",
                displayName: "DBLP",
                description: "计算机科学书目数据库",
                logoPath: envConfig.baseUrl + "img/menu/DBLP.png",
                websiteUrl: "https://dblp.uni-trier.de",
                redirectType: "DETAIL"
            }, {
                itemId: "94a43c1c-e088-4ac4-a03c-bc7e1e48839e",
                displayName: "CiteseerX",
                description: "理论计算机科学、早期文献获取",
                logoPath: envConfig.baseUrl + "img/menu/CiteseerX.png",
                websiteUrl: "https://citeseerx.ist.psu.edu",
                redirectType: "DETAIL"
            }, {
                itemId: "56bc7bdd-a3bf-4a99-ab7c-2b47e737b059",
                displayName: "SciFinder",
                description: "全球最全化学物质/反应数据库",
                logoPath: envConfig.baseUrl + "img/menu/SciFinder.png",
                websiteUrl: "https://sso.cas.org/",
                redirectType: "DETAIL"
            }, {
                itemId: "f6ea7c66-b0bf-417c-88cb-c0c1827fa6d6",
                displayName: "Materials Project Documentation",
                description: "免费计算材料数据库",
                logoPath: envConfig.baseUrl + "img/menu/MaterialsProjectDocumentation.png",
                websiteUrl: "https://next-gen.materialsproject.org",
                redirectType: "DETAIL"
            }, {
                itemId: "c409d406-8d7a-4961-b523-2a59c5b67cfe",
                displayName: "ICE Virtual Library",
                description: "英国土木工程师学会期刊",
                logoPath: envConfig.baseUrl + "img/menu/ICEVirtualLibrary.png",
                websiteUrl: "https://www.icevirtuallibrary.com",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "cbe8a570-19c5-469d-94d7-07637d31088e",
            displayName: "自然科学",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/自然科学.png",
            children: [],
            items: [{
                itemId: "bdf7aabd-d0f0-4d08-a3a9-0bbbb0b4dcab",
                displayName: "Web of Science",
                description: "获取自然科学领域最权威、最前沿的科研信息",
                logoPath: envConfig.baseUrl + "img/menu/WebofScience.png",
                websiteUrl: "https://www.webofscience.com",
                redirectType: "DETAIL"
            }, {
                itemId: "b9350461-d33a-4a7b-a019-288763956c51",
                displayName: "Engineering Village",
                description: "工程技术领域的综合性检索工具",
                logoPath: envConfig.baseUrl + "img/menu/EngineeringVillage.png",
                websiteUrl: "https://www.elsevier.cn/products/engineering-village/",
                redirectType: "DETAIL"
            }, {
                itemId: "934f215b-327b-4035-98d7-44a67e2f707a",
                displayName: "PubMed",
                description: "医学、生物学等相关领域研究人员获取文献的重要途径",
                logoPath: envConfig.baseUrl + "img/menu/PubMed.png",
                websiteUrl: "https://pubmed.ncbi.nlm.nih.gov/",
                redirectType: "DETAIL"
            }, {
                itemId: "a0d8a6d8-c8da-471a-8573-cdadbc8e2870",
                displayName: "arXiv",
                description: "全球最大的预印本平台之一，及时了解这些领域的最新研究动态和成果",
                logoPath: envConfig.baseUrl + "img/menu/arXiv.png",
                websiteUrl: "http://arxiv.org/",
                redirectType: "DETAIL"
            }, {
                itemId: "15595288-776b-494b-8c2a-5110e9998bfa",
                displayName: "PubMed Central (PMC)",
                description: "全球免费使用的生命科学期刊原始研究论文全文库",
                logoPath: envConfig.baseUrl + "img/menu/PubMedCentral(PMC).png",
                websiteUrl: "https://pmc.ncbi.nlm.nih.gov/",
                redirectType: "DETAIL"
            }, {
                itemId: "4385a3f7-36c7-4fd7-ae74-680ea1270350",
                displayName: "Elsevier",
                description: "文献信息检索系统",
                logoPath: envConfig.baseUrl + "img/menu/Elsevier.png",
                websiteUrl: "https://www.sciencedirect.com/",
                redirectType: "DETAIL"
            }, {
                itemId: "8fa0910d-8b10-4966-9356-9bac93a3964c",
                displayName: "Scopus",
                description: "全球最大的同行评议学术论文摘要和引文数据库",
                logoPath: envConfig.baseUrl + "img/menu/Scopus.png",
                websiteUrl: "https://www.scopus.com/home.uri",
                redirectType: "DETAIL"
            }, {
                itemId: "205279b8-f87b-491b-95c7-dfdde1631d5a",
                displayName: "SpringerLink",
                description: "综合性的在线学术资源平台",
                logoPath: envConfig.baseUrl + "img/menu/SpringerLink.png",
                websiteUrl: "https://link.springer.com",
                redirectType: "DETAIL"
            }]
        }],
        items: []
    }, {
        nodeId: "12741430-3c77-11f0-9b5b-bc24117649c5",
        displayName: "专利检索",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [{
            nodeId: "446304ed-2d47-4ac3-b7fc-1d714f5e1d79",
            displayName: "外国专利",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/外国专利.png",
            children: [],
            items: [{
                itemId: "f901ac8c-e139-405e-b8e3-8d7d5451010c",
                displayName: "Patentscope（WIPO）",
                description: "世界知识产权组织的数据库",
                logoPath: envConfig.baseUrl + "img/menu/Patentscope（WIPO）.png",
                websiteUrl: "https://patentscope.wipo.int",
                redirectType: "DETAIL"
            }, {
                itemId: "7adf9257-354e-4042-aa15-1d6cca529b6f",
                displayName: "Espacenet",
                description: "欧洲专利局数据库",
                logoPath: envConfig.baseUrl + "img/menu/Espacenet.png",
                websiteUrl: "https://worldwide.espacenet.com",
                redirectType: "DETAIL"
            }, {
                itemId: "38587e4d-0188-44d4-95bf-92af816d4172",
                displayName: "Google Patents",
                description: "覆盖美、欧、WIPO 等的授权专利与公开申请",
                logoPath: envConfig.baseUrl + "img/menu/GooglePatents.png",
                websiteUrl: "https://www.google.com/patents",
                redirectType: "DETAIL"
            }, {
                itemId: "d0a5fdc6-58e7-4c22-9779-eb529dd2a354",
                displayName: "USPTO",
                description: "查美国专利，含全文、申请库及分类数据库",
                logoPath: envConfig.baseUrl + "img/menu/USPTO.png",
                websiteUrl: "https://www.uspto.gov/patents",
                redirectType: "DETAIL"
            }, {
                itemId: "2bcb0814-6cbe-414e-a103-5c12adf7b664",
                displayName: "incoPat",
                description: "支持多语言、多维度检索分析",
                logoPath: envConfig.baseUrl + "img/menu/incoPat.png",
                websiteUrl: "http://www.incopat.com",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "7dffc03b-8817-4b74-ad99-648e1d05a0f5",
            displayName: "中国专利",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/中国专利.png",
            children: [],
            items: [{
                itemId: "674a2c3b-7d0d-486b-8a3a-734049c1e984",
                displayName: "中国专利公布公告",
                description: "含 1985 年起中国全部专利信息",
                logoPath: envConfig.baseUrl + "img/menu/中国专利公布公告.png",
                websiteUrl: "http://epub.cnipa.gov.cn",
                redirectType: "DETAIL"
            }, {
                itemId: "7e76e71a-d838-41ec-82fe-fb3b3ff3b03e",
                displayName: "国知局专利检索及分析",
                description: "收录多国专利数据，有分析、生成报告功能",
                logoPath: envConfig.baseUrl + "img/menu/国知局专利检索及分析.png",
                websiteUrl: "https://pss-system.cponline.cnipa.gov.cn/conventionalSearch",
                redirectType: "DETAIL"
            }, {
                itemId: "c2ffa64d-6511-4ec9-b355-62404f2c10b7",
                displayName: "专利信息服务平台",
                description: "中国专利专业检索，可监控专利变化",
                logoPath: envConfig.baseUrl + "img/menu/专利信息服务平台.png",
                websiteUrl: "http://search.cnipr.com/",
                redirectType: "DETAIL"
            }, {
                itemId: "f85aecf8-6adb-413e-b880-53bfb52a0dfa",
                displayName: "专利之星",
                description: "含全球超 1 亿件专利数据",
                logoPath: envConfig.baseUrl + "img/menu/专利之星.png",
                websiteUrl: "https://www.patentstar.com.cn",
                redirectType: "DETAIL"
            }, {
                itemId: "93e94755-6529-4c8d-abaf-aa892e4424db",
                displayName: "中国知网专利检索",
                description: "集成关联文献、成果等，展现专利背景动态",
                logoPath: envConfig.baseUrl + "img/menu/中国知网专利检索.png",
                websiteUrl: "https://aipat.cnki.net",
                redirectType: "DETAIL"
            }]
        }],
        items: []
    }, {
        nodeId: "127a2288-3c77-11f0-9b5b-bc24117649c5",
        displayName: "期刊推荐",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [{
            nodeId: "44c996e0-eb0c-4773-a58d-290eff7befcf",
            displayName: "国际核心",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/国际核心.png",
            children: [],
            items: [{
                itemId: "1353e367-b91b-4db2-8b94-ffd4a2c50657",
                displayName: "SCI《科学引文索引》/Science Citation Index",
                description: "一个多学科的综合性大型引文数据库",
                logoPath: envConfig.baseUrl + "img/menu/SCI《科学引文索引》/ScienceCitationIndex.png",
                websiteUrl: "https://clarivate.com/webofsciencegroup/",
                redirectType: "DETAIL"
            }, {
                itemId: "980e2684-58d6-438d-9440-1de1f43f5255",
                displayName: "EI《工程索引》/The Engineering Index",
                description: "期刊包括全部工程学科和工程活动领域的研究成果",
                logoPath: envConfig.baseUrl + "img/menu/EI《工程索引》/TheEngineeringIndex.png",
                websiteUrl: "https://www.engineeringvillage.com/",
                redirectType: "DETAIL"
            }, {
                itemId: "bf13bee0-1f5c-40c8-8308-b046068a1672",
                displayName: "SSCI《社会科学引文索引》/Social Sciences Citation Index",
                description: "社会科学领域重要的引文索引数据库，也是 SCI 的姊妹索引",
                logoPath: envConfig.baseUrl + "img/menu/SSCI《社会科学引文索引》/SocialSciencesCitationIndex.png",
                websiteUrl: "https://clarivate.com/webofsciencegroup/",
                redirectType: "DETAIL"
            }, {
                itemId: "89d98a7d-3c95-4a64-920f-188d182359f6",
                displayName: "ISTP《科技会议录索引》/Index to Scientific & Technical Proceedings",
                description: "检索全世界正式出版的会议文献的主要和权威工具",
                logoPath: envConfig.baseUrl + "img/menu/ISTP《科技会议录索引》/IndextoScientific&TechnicalProceedings.png",
                websiteUrl: "https://clarivate.com/webofsciencegroup/",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "c627b1e0-2510-4339-beb8-dab325ea7990",
            displayName: "国内核心",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/国内核心.png",
            children: [],
            items: [{
                itemId: "f027c398-e9ea-421d-b203-c9f107efbeab",
                displayName: "《中文核心期刊要目总览》",
                description: "北京大学图书馆",
                logoPath: envConfig.baseUrl + "img/menu/《中文核心期刊要目总览》.png",
                websiteUrl: "http://hxqk.lib.pku.edu.cn",
                redirectType: "DETAIL"
            }, {
                itemId: "82f09f90-6f0f-4bd3-a5c0-e50c4128a7ac",
                displayName: "中文社会科学索引（CSSCI）来源期刊",
                description: "南京大学",
                logoPath: envConfig.baseUrl + "img/menu/中文社会科学索引（CSSCI）来源期刊.png",
                websiteUrl: "https://cssrac.nju.edu.cn",
                redirectType: "DETAIL"
            }, {
                itemId: "639e3952-1f1b-47ca-9b3e-2c969d916200",
                displayName: "中国科技论文统计源期刊/中国科技核心期刊",
                description: "中国科学技术信息研究所",
                logoPath: envConfig.baseUrl + "img/menu/中国科技论文统计源期刊/中国科技核心期刊.png",
                websiteUrl: "http://www.istic.ac.cn",
                redirectType: "DETAIL"
            }, {
                itemId: "3f83b173-87fc-4355-b227-f7b2023e1e8c",
                displayName: "中国人文社会科学核心期刊",
                description: "中国社会科学院文献信息中心",
                logoPath: envConfig.baseUrl + "img/menu/中国人文社会科学核心期刊.png",
                websiteUrl: "http://www.lib.cass.org.cn",
                redirectType: "DETAIL"
            }, {
                itemId: "5b213e6c-9706-4458-9997-4226d8e0d319",
                displayName: "中国科学引文数据库(CSCD)来源期刊",
                description: "中国科学院文献情报中心",
                logoPath: envConfig.baseUrl + "img/menu/中国科学引文数据库(CSCD)来源期刊.png",
                websiteUrl: "http://sciencechina.cn/cscd_source.jsp",
                redirectType: "DETAIL"
            }, {
                itemId: "6e1a6794-c779-42f9-bdeb-cf8ecc2ded75",
                displayName: "中国核心期刊遴选数据库",
                description: "万方数据股份有限公司",
                logoPath: envConfig.baseUrl + "img/menu/中国核心期刊遴选数据库.png",
                websiteUrl: "https://c.wanfangdata.com.cn/periodical",
                redirectType: "DETAIL"
            }]
        }],
        items: []
    }, {
        nodeId: "127a2288-3c77-11f0-9b5b-bc24117649c6",
        displayName: "期刊检索",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [{
            itemId: "15a2b456-90e5-40ed-8c6f-91a1fb74458d",
            displayName: "中国学术期刊",
            description: "知网期刊检索入口",
            logoPath: envConfig.baseUrl + "img/menu/中国学术期刊.png",
            websiteUrl: "https://cajn.cnki.net/cajn/",
            redirectType: "DETAIL"
        }, {
            itemId: "6240dab8-2260-44e5-b521-cf8124cba9f1",
            displayName: "Elsevier",
            description: "文献/期刊信息检索系统",
            logoPath: envConfig.baseUrl + "img/menu/Elsevier.png",
            websiteUrl: "https://www.sciencedirect.com/",
            redirectType: "DETAIL"
        }, {
            itemId: "1fd3139e-cbb0-4c96-8823-43860954e384",
            displayName: "核心期刊查询",
            description: "期刊核心资质检索",
            logoPath: envConfig.baseUrl + "img/menu/核心期刊查询.png",
            websiteUrl: "http://corejournal.lib.sjtu.edu.cn",
            redirectType: "DETAIL"
        }, {
            itemId: "9a59911c-ba0c-4200-b93a-82beaf8c3a74",
            displayName: "MedSci",
            description: "医学科研服务平台",
            logoPath: envConfig.baseUrl + "img/menu/MedSci.png",
            websiteUrl: "https://www.medsci.cn/sci/index.do",
            redirectType: "DETAIL"
        }, {
            itemId: "a6ac8c9a-8ebc-48bf-9aa8-ed3474e44b11",
            displayName: "北大期刊网",
            description: "中文核心期刊查询",
            logoPath: envConfig.baseUrl + "img/menu/北大期刊网.png",
            websiteUrl: "https://ccj.pku.edu.cn",
            redirectType: "DETAIL"
        }]
    }, {
        nodeId: "1220200a-3c77-11f0-9b5b-bc24117649c4",
        displayName: "写作翻译",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [{
            itemId: "e23c0fe2-ec4d-43c7-8806-995fe038e9eb",
            displayName: "知网翻译",
            description: "提供规范的学术表达",
            logoPath: envConfig.baseUrl + "img/menu/知网翻译.png",
            websiteUrl: "https://dict.cnki.net/index",
            redirectType: "DETAIL"
        }, {
            itemId: "873ff787-1988-45a7-9ce3-f366024ef856",
            displayName: "有道翻译",
            description: "多场景智能翻译平台",
            logoPath: envConfig.baseUrl + "img/menu/有道翻译.png",
            websiteUrl: "https://fanyi.youdao.com/#/AITranslate",
            redirectType: "DETAIL"
        }, {
            itemId: "9c076aab-9a6a-487f-a42f-0821337e59d4",
            displayName: "百度翻译",
            description: "免费在线翻译工具",
            logoPath: envConfig.baseUrl + "img/menu/百度翻译.png",
            websiteUrl: "https://fanyi.baidu.com/mtpe-individual/multimodal#/",
            redirectType: "DETAIL"
        }, {
            itemId: "9a148960-d08f-473a-9d11-0ccfddec2c66",
            displayName: "DeepL",
            description: "精准翻译，支持多语种",
            logoPath: envConfig.baseUrl + "img/menu/DeepL.png",
            websiteUrl: "https://www.deepl.com/zh/translator",
            redirectType: "DETAIL"
        }, {
            itemId: "17a8586b-063c-4b6e-9966-f7a8f94fabc4",
            displayName: "知云文献翻译",
            description: "多引擎切换",
            logoPath: envConfig.baseUrl + "img/menu/知云文献翻译.png",
            websiteUrl: "https://www.zhiyunwenxian.cn",
            redirectType: "DETAIL"
        }]
    }, {
        nodeId: "128136a1-3c77-11f0-9b5b-bc24117649c5",
        displayName: "文献管理",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [{
            itemId: "eef36b0d-d730-4a7b-89a9-6e6442006684",
            displayName: "NoteExpress",
            description: "论文写作时的参考文献管理",
            logoPath: envConfig.baseUrl + "img/menu/NoteExpress.png",
            websiteUrl: "https://jc.inoteexpress.com/dynamo/index.html",
            redirectType: "DETAIL"
        }, {
            itemId: "6d01137c-e654-4fe7-bc39-68343cdf3a1b",
            displayName: "Mendeley",
            description: "有强大的 PDF 识别和搜索功能",
            logoPath: envConfig.baseUrl + "img/menu/Mendeley.png",
            websiteUrl: "https://www.mendeley.com",
            redirectType: "DETAIL"
        }]
    }, {
        nodeId: "12898852-3c77-11f0-9b5b-bc24117649c5",
        displayName: "论文查重",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [{
            nodeId: "c8fe8e32-f4de-4d1f-af7a-5ccae32039d8",
            displayName: "科研/期刊论文查重",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/科研/期刊论文查重.png",
            children: [],
            items: [{
                itemId: "156ec0d4-7f37-4e44-890d-1df980f6d8cf",
                displayName: "paperyy",
                description: "免费初稿，智能降重辅助",
                logoPath: envConfig.baseUrl + "img/menu/paperyy.png",
                websiteUrl: "https://www.paperyy.cn",
                redirectType: "DETAIL"
            }, {
                itemId: "dd9a7471-2490-4abc-b2a2-81a1b0656aca",
                displayName: "iThenticate",
                description: "国际论文查重，防抄袭",
                logoPath: envConfig.baseUrl + "img/menu/iThenticate.png",
                websiteUrl: "https://www.ithenticatecn.com",
                redirectType: "DETAIL"
            }, {
                itemId: "45e96f57-7350-451c-a594-7c6b2c5382be",
                displayName: "Cross Check",
                description: "国际上最权威的英文论文查重工具",
                logoPath: envConfig.baseUrl + "img/menu/CrossCheck.png",
                websiteUrl: "https://www.crosscheckcn.com",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "27c705c4-c627-4874-90f2-eefdeabf8512",
            displayName: "学位论文查重",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/学位论文查重.png",
            children: [],
            items: [{
                itemId: "b6afca4c-2e25-4571-9014-00c43501f0f4",
                displayName: "万方查重",
                description: "数据全，侧重中文文献",
                logoPath: envConfig.baseUrl + "img/menu/万方查重.png",
                websiteUrl: "https://check.wanfangdata.com.cn",
                redirectType: "DETAIL"
            }, {
                itemId: "1e707b83-3a63-442a-ba47-0d83dbda4d29",
                displayName: "维普论文查重",
                description: "算法严，高校常用",
                logoPath: envConfig.baseUrl + "img/menu/维普论文查重.png",
                websiteUrl: "https://vpcs.fanyu.com",
                redirectType: "DETAIL"
            }, {
                itemId: "073b1426-f68a-4b00-a859-1d975fe94bfd",
                displayName: "学信网查重",
                description: "权威，本科 / 硕博适用",
                logoPath: envConfig.baseUrl + "img/menu/学信网查重.png",
                websiteUrl: "https://chsi.wanfangtech.net",
                redirectType: "DETAIL"
            }, {
                itemId: "8443131a-2fb5-49d5-b97a-41165875b325",
                displayName: "知网查重",
                description: "高校定稿首选，数据库全",
                logoPath: envConfig.baseUrl + "img/menu/知网查重.png",
                websiteUrl: "https://cx.cnki.net/#/login",
                redirectType: "DETAIL"
            }]
        }],
        items: []
    }, {
        nodeId: "1220200a-3c77-21f0-9b5b-bc24117649c5",
        displayName: "数据分析",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [{
            itemId: "f4651d4e-f601-49b9-beb8-2ecf1b9bae8a",
            displayName: "SPSSPRO",
            description: "国产免费在线数据分析平台，一键自动化建模分析、生成报告",
            logoPath: envConfig.baseUrl + "img/menu/SPSSPRO.png",
            websiteUrl: "https://www.spsspro.com",
            redirectType: "DETAIL"
        }, {
            itemId: "0a658d06-14b7-4657-b217-f0b98a259629",
            displayName: "Tableau",
            description: "一个可视化数据分析平台，帮助每个人做出数据驱动型决策",
            logoPath: envConfig.baseUrl + "img/menu/Tableau.png",
            websiteUrl: "https://www.tableau.com/zh-cn",
            redirectType: "DETAIL"
        }, {
            itemId: "b1d7b85d-5e04-466b-bdb1-72c17abeef2f",
            displayName: "ChatExcel",
            description: "通过AI聊天，实现Excel处理和数据分析",
            logoPath: envConfig.baseUrl + "img/menu/ChatExcel.png",
            websiteUrl: "https://chatexcel.com/#/",
            redirectType: "DETAIL"
        }, {
            itemId: "63e0d07e-89fc-4552-910a-a59f5aaaefe2",
            displayName: "Image-Pro",
            description: "一款用于科学图像处理和分析的软件，适用于2D和3D的图像处理、增强和分析",
            logoPath: envConfig.baseUrl + "img/menu/Image-Pro.png",
            websiteUrl: "https://www.meyerinst.com/brand/mediacybernetics/image-pro-v11/",
            redirectType: "DETAIL"
        }, {
            itemId: "764657d6-5479-4d92-83bc-f6a6ca1bff0b",
            displayName: "GetData",
            description: "一款专业的图形数字化软件，支持从多种图形格式（如TIFF、JPEG等）中提取数据",
            logoPath: envConfig.baseUrl + "img/menu/GetData.png",
            websiteUrl: "https://getdata.com",
            redirectType: "DETAIL"
        }]
    }, {
        nodeId: "1290200a-3c77-11f0-9b5b-bc24117649c5",
        displayName: "科研绘图",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [{
            itemId: "7b13485d-595a-4353-adbd-752a5791445a",
            displayName: "Origin",
            description: "一款适用于各种专业模式的数据绘图及分析软件",
            logoPath: envConfig.baseUrl + "img/menu/Origin.png",
            websiteUrl: "https://www.originlab.com",
            redirectType: "DETAIL"
        }, {
            itemId: "8bf98526-ec7b-499b-987c-f2100b77c3a6",
            displayName: "Adobe Illustrator",
            description: "矢量图绘制软件，适用于三维结构示意图绘制、数据图排版和细节调整",
            logoPath: envConfig.baseUrl + "img/menu/AdobeIllustrator.png",
            websiteUrl: "https://www.adobe.com/products/illustrator.html",
            redirectType: "DETAIL"
        }, {
            itemId: "c28c35fa-b6c4-429e-8fbb-abebc9cc2a42",
            displayName: "Inkscape",
            description: "免费的矢量图形设计软件，适用于科学图表和插图制作",
            logoPath: envConfig.baseUrl + "img/menu/Inkscape.png",
            websiteUrl: "https://inkscape.org/zh-hans/",
            redirectType: "DETAIL"
        }, {
            itemId: "c657f060-66d3-46eb-98a6-1d566970dd9e",
            displayName: "Blender",
            description: "一款开源的3D插图软件，适用于科研模型绘制",
            logoPath: envConfig.baseUrl + "img/menu/Blender.png",
            websiteUrl: "https://www.blender.org",
            redirectType: "DETAIL"
        }, {
            itemId: "f72ac387-c273-47f5-87fa-9ca6da8dbd51",
            displayName: "Mind the Graph",
            description: "一个用户自己DIY制作插图的平台，涵盖80多种学科素材，适用于新手",
            logoPath: envConfig.baseUrl + "img/menu/MindtheGraph.png",
            websiteUrl: "https://www.mindthegraph.cn",
            redirectType: "DETAIL"
        }, {
            itemId: "b92cd9f5-be36-4506-935a-10f8fff2f874",
            displayName: "GMT",
            description: "地球科学领域使用最广泛的制图软件之一，具有强大的绘图功能和数据处理功能",
            logoPath: envConfig.baseUrl + "img/menu/GMT.png",
            websiteUrl: "https://docs.gmt-china.org/latest/",
            redirectType: "DETAIL"
        }, {
            itemId: "bfb76955-39b7-4d96-bc5a-0de8cc0cad06",
            displayName: "BioRender",
            description: "生命科学领域的在线插图工具，提供了海量的图标和模板库",
            logoPath: envConfig.baseUrl + "img/menu/BioRender.png",
            websiteUrl: "https://www.biorender.com",
            redirectType: "DETAIL"
        }, {
            itemId: "07d6ebab-3a6d-4b59-9c58-449a83bc3b23",
            displayName: "ChemDraw",
            description: "化工及生物医药领域的强大科研绘图工具,能够快速、准确地绘制化学结构式和生物分子图形",
            logoPath: envConfig.baseUrl + "img/menu/ChemDraw.png",
            websiteUrl: "https://www.chemdraw.com.cn",
            redirectType: "DETAIL"
        }]
    }, {
        nodeId: "1220200a-3c27-21f0-9b5b-bc24117649d5",
        displayName: "基金项目",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [{
            itemId: "27a8c518-e274-4ee1-ab72-d39f713fa58f",
            displayName: "自然科学基金委",
            description: "国家自然科学基金委员会",
            logoPath: envConfig.baseUrl + "img/menu/自然科学基金委.png",
            websiteUrl: "https://www.nsfc.gov.cn",
            redirectType: "DETAIL"
        }, {
            itemId: "255fc2af-6f26-4671-88d5-0f4c1ba51e14",
            displayName: "科学网基金",
            description: "支持所有学科类别的项目查询及立项项目的快捷检索",
            logoPath: envConfig.baseUrl + "img/menu/科学网基金.png",
            websiteUrl: "https://fund.sciencenet.cn",
            redirectType: "DETAIL"
        }, {
            itemId: "4fac11d2-3d8f-4119-8868-39c83fd03941",
            displayName: "青塔｜自科云",
            description: "全球科研基金项目在线查询",
            logoPath: envConfig.baseUrl + "img/menu/青塔｜自科云.png",
            websiteUrl: "https://fund.cingta.com",
            redirectType: "DETAIL"
        }, {
            itemId: "1a11248e-8213-4372-96c8-631d2db0c7dc",
            displayName: "国家社科基金项目数据库",
            description: "社科类项目查询",
            logoPath: envConfig.baseUrl + "img/menu/国家社科基金项目数据库.png",
            websiteUrl: "http://fz.people.com.cn/skygb/sk/index.php/Index/index",
            redirectType: "DETAIL"
        }, {
            itemId: "664b28c5-5c3a-4d5c-92d0-4815fa634ce6",
            displayName: "MedSci（梅斯医学）“全球基金查询”",
            description: "聚焦医学健康研究项目，实时更新",
            logoPath: envConfig.baseUrl + "img/menu/MedSci（梅斯医学）“全球基金查询”.png",
            websiteUrl: "https://www.medsci.cn/sci/nsfc_index",
            redirectType: "DETAIL"
        }, {
            itemId: "947c1432-e18f-4006-b87b-d71b88808d97",
            displayName: "ZCOOL国家自然科学基金查询",
            description: "提供部分学科的科研基金项目在线查询服务",
            logoPath: envConfig.baseUrl + "img/menu/ZCOOL国家自然科学基金查询.png",
            websiteUrl: "http://fund.keyanzhiku.com",
            redirectType: "DETAIL"
        }]
    }, {
        nodeId: "1240200a-3c27-21f0-9b5b-bc24117649d5",
        displayName: "科研社区",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [{
            itemId: "074ad74c-817a-4663-9234-7423be88aa72",
            displayName: "ResearchGate",
            description: "一个为科研人员设计的社交网络平台，“科学界的Facebook”",
            logoPath: envConfig.baseUrl + "img/menu/ResearchGate.png",
            websiteUrl: "https://www.researchgate.net",
            redirectType: "DETAIL"
        }, {
            itemId: "f259ced2-eb4f-4e93-a5b6-094a52a11f26",
            displayName: "LinkedIn",
            description: "为科研人员提供了展示研究成果、寻找学术合作、了解学术动态的平台",
            logoPath: envConfig.baseUrl + "img/menu/LinkedIn.png",
            websiteUrl: "https://www.linkedin.com",
            redirectType: "DETAIL"
        }, {
            itemId: "05532fec-7f58-45c5-bb55-953a68685f0e",
            displayName: "Academia",
            description: "专注于学术交流和科研论文分享的学术型社交网站",
            logoPath: envConfig.baseUrl + "img/menu/Academia.png",
            websiteUrl: "https://www.academia.edu",
            redirectType: "DETAIL"
        }, {
            itemId: "61fea3ca-e564-4a9c-a0fa-2267dae2954f",
            displayName: "LabRoots",
            description: "可实现虚拟可视化交流",
            logoPath: envConfig.baseUrl + "img/menu/LabRoots.png",
            websiteUrl: "https://www.labroots.com",
            redirectType: "DETAIL"
        }, {
            itemId: "f28d95f9-acc0-4b2c-940a-47ea9bac9a71",
            displayName: "GitHub",
            description: "科研代码向交流平台",
            logoPath: envConfig.baseUrl + "img/menu/GitHub.png",
            websiteUrl: "https://github.com",
            redirectType: "DETAIL"
        }, {
            itemId: "c0a3e97e-569d-4fb5-942b-8f16c354f416",
            displayName: "小木虫",
            description: "国内学术科研互动平台",
            logoPath: envConfig.baseUrl + "img/menu/小木虫.png",
            websiteUrl: "https://muchong.com/bbs/",
            redirectType: "DETAIL"
        }, {
            itemId: "72f3bcb3-f1b3-4dcd-b1c7-afbc63e73de8",
            displayName: "经管之家",
            description: "国内最大的“中国经济学”学术交流平台。",
            logoPath: envConfig.baseUrl + "img/menu/经管之家.png",
            websiteUrl: "https://bbs.pinggu.org",
            redirectType: "DETAIL"
        }]
    }, {
        nodeId: "1240200a-3c27-21f0-9b5b-bc24117649d56",
        displayName: "预印平台",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [{
            itemId: "f3e4ec2a-a3a1-4994-93e5-03b51ac29f8c",
            displayName: "arXiv",
            description: "全球最大的预印本平台之一",
            logoPath: envConfig.baseUrl + "img/menu/arXiv.png",
            websiteUrl: "http://arxiv.org/",
            redirectType: "DETAIL"
        }, {
            itemId: "9eb1800a-9453-42a2-b345-265ff28e1a19",
            displayName: "bioRxiv",
            description: "生命科学预印本平台",
            logoPath: envConfig.baseUrl + "img/menu/bioRxiv.png",
            websiteUrl: "https://connect.biorxiv.org/relate/content/181",
            redirectType: "DETAIL"
        }, {
            itemId: "593c6308-4e8f-40c8-a79b-fdeed613aabe",
            displayName: "ChemRxiv",
            description: "化学领域预印本平台",
            logoPath: envConfig.baseUrl + "img/menu/ChemRxiv.png",
            websiteUrl: "https://chemrxiv.org/",
            redirectType: "DETAIL"
        }, {
            itemId: "85bbfdd7-dc6f-455b-a7f7-611cfd60f1f4",
            displayName: "SSRN",
            description: " 社会科学和人文学科最重要的预印本平台",
            logoPath: envConfig.baseUrl + "img/menu/SSRN.png",
            websiteUrl: "https://www.elsevier.com/products/ssrn-preprint-services/research-networks",
            redirectType: "DETAIL"
        }, {
            itemId: "1cd97e95-419d-4160-adae-0922b103aba0",
            displayName: "Preprints.org",
            description: "多学科预印本服务平台",
            logoPath: envConfig.baseUrl + "img/menu/Preprints.org.png",
            websiteUrl: "https://preprints.org/",
            redirectType: "DETAIL"
        }]
    }, {
        nodeId: "1240200a-3c27-21f0-9b5b-bc24117649d57",
        displayName: "编程辅助",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [{
            nodeId: "f827b175-6c22-4d7c-84c1-7a62479f3041",
            displayName: "代码阅读",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/代码阅读.png",
            children: [],
            items: [{
                itemId: "9c6c8292-8782-4d73-9bdb-895c0b7cd054",
                displayName: "OpenGrok",
                description: "一款免费、开源、功能强大、运行流畅的代码阅读器",
                logoPath: envConfig.baseUrl + "img/menu/OpenGrok.png",
                websiteUrl: "https://github.com/oracle/opengrok",
                redirectType: "DETAIL"
            }, {
                itemId: "1fa1a3dc-fa46-4231-a5fb-ad2a1e12ae1d",
                displayName: "Sourcetrail",
                description: "开源免费的源码阅读神器 Sourcetrail，高效阅读python，pytorch等深度学习框架代码",
                logoPath: envConfig.baseUrl + "img/menu/Sourcetrail.png",
                websiteUrl: "https://www.sourcetrail.com",
                redirectType: "DETAIL"
            }, {
                itemId: "e94f6fa5-5e58-4481-8d13-d2e234e265cc",
                displayName: "Scitools Understand",
                description: "静态代码分析神器",
                logoPath: envConfig.baseUrl + "img/menu/ScitoolsUnderstand.png",
                websiteUrl: "https://scitools.com",
                redirectType: "DETAIL"
            }, {
                itemId: "6e2c09de-83ff-4f8d-97d4-37524e5fdea2",
                displayName: "Source Insight",
                description: "一款用于代码阅读和管理的软件工具。",
                logoPath: envConfig.baseUrl + "img/menu/SourceInsight.png",
                websiteUrl: "https://www.sourceinsight.com",
                redirectType: "DETAIL"
            }, {
                itemId: "ad93db13-0d7a-41fa-85e9-6c9880f6edf0",
                displayName: "Codemap",
                description: "一款辅助阅读源代码、分析项目结构的工具",
                logoPath: envConfig.baseUrl + "img/menu/Codemap.png",
                websiteUrl: "https://www.codemap.info/index.html",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "3a718ee9-61da-4ec5-95ed-bbceeea993be",
            displayName: "代码编写",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/代码编写.png",
            children: [],
            items: [{
                itemId: "70fca86b-1838-4456-94cd-52e3dc3067b8",
                displayName: "Codeium Windsurf",
                description: "Codeium 公司推出的最新一代 AI 辅助引擎/模型",
                logoPath: envConfig.baseUrl + "img/menu/CodeiumWindsurf.png",
                websiteUrl: "https://windsurf.com/editor",
                redirectType: "DETAIL"
            }, {
                itemId: "f2bc16b6-c15b-4f5a-9b00-c3a960db0359",
                displayName: "cursor",
                description: "从零开始构建的现代化AI集成IDE",
                logoPath: envConfig.baseUrl + "img/menu/Cursor.png",
                websiteUrl: "https://www.cursor.com/ja",
                redirectType: "DETAIL"
            }, {
                itemId: "de08ec5e-a829-4ac2-801e-89c916c8cee1",
                displayName: "Trace IDE",
                description: "功能丰富的AI驱动IDE，集成Claude 3.5和GPT-4",
                logoPath: envConfig.baseUrl + "img/menu/TraceIDE.png",
                websiteUrl: "https://traeide.com/zh",
                redirectType: "DETAIL"
            }, {
                itemId: "4416d792-06fd-49a1-952c-024b2a8cb504",
                displayName: "Amazon CodeWhisperer",
                description: "适用于软件开发的最强大的生成式人工智能助手",
                logoPath: envConfig.baseUrl + "img/menu/AmazonCodeWhisperer.png",
                websiteUrl: "https://aws.amazon.com/cn/q/developer/",
                redirectType: "DETAIL"
            }, {
                itemId: "c711e134-2d64-4d85-b0e6-9c5275d8545f",
                displayName: "GitHub Copilot",
                description: "GitHub 和 OpenAI 联手打造的人工智能编程助手",
                logoPath: envConfig.baseUrl + "img/menu/GitHubCopilot.png",
                websiteUrl: "https://github.com/features/copilot",
                redirectType: "DETAIL"
            }]
        }],
        items: []
    }];

/** 计算机科学菜单节点 */
export const computerMenuNodes: MenuNode[] = [
    {
        nodeId: "66dcd064-de43-4438-b04e-83f577264e43",
        displayName: "鱼丸推荐",
        nodeType: "MENU",
        iconPath: "line-md:thumbs-up",
        children: [],
        items: [{
            itemId: "f5c80bb6-d700-42d7-99a1-da1bd1f1257e",
            displayName: "GitHub",
            description: "全球最流行的代码托管平台",
            logoPath: envConfig.baseUrl + "img/menu/GitHub.png",
            websiteUrl: "https://github.com/",
            redirectType: "DETAIL"
        }, {
            itemId: "1f509005-8784-45e8-9d7f-b5845defe764",
            displayName: "GitLab",
            description: "一站式代码托管和研发协作平台",
            logoPath: envConfig.baseUrl + "img/menu/GitLab.png",
            websiteUrl: "https://gitlab.cn/",
            redirectType: "DETAIL"
        }, {
            itemId: "744343ec-e020-49e4-9bc5-1f7de695ab71",
            displayName: "Gitee",
            description: "代码托管、企业研发效能平台",
            logoPath: envConfig.baseUrl + "img/menu/Gitee.png",
            websiteUrl: "https://gitee.com/",
            redirectType: "DETAIL"
        }, {
            itemId: "5c59a751-cddb-4b24-b9ef-8b97acfb699c",
            displayName: "TensorFlow",
            description: "由 Google 开发的开源机器学习框架",
            logoPath: envConfig.baseUrl + "img/menu/TensorFlow.png",
            websiteUrl: "https://www.tensorflow.org/",
            redirectType: "DETAIL"
        }, {
            itemId: "28dedb0b-2bab-4123-953f-59b42567f4c8",
            displayName: "PyTorch",
            description: "由 Facebook 提供的深度学习框架",
            logoPath: envConfig.baseUrl + "img/menu/PyTorch.png",
            websiteUrl: "https://pytorch.org",
            redirectType: "DETAIL"
        }, {
            itemId: "fdfba881-f370-4364-aa04-b0c7c5181a37",
            displayName: "OpenCV",
            description: "广泛使用的计算机视觉库，支持图像和视频处理",
            logoPath: envConfig.baseUrl + "img/menu/OpenCV.png",
            websiteUrl: "https://opencv.org",
            redirectType: "DETAIL"
        }]
    }, {
        nodeId: "6b1b9172-063b-46b0-91ff-acd0e0094d31",
        displayName: "科研开发",
        nodeType: "MENU",
        iconPath: "line-md:thumbs-up",
        children: [{
            nodeId: "305d6c8f-b42e-4e4d-b1a4-8d20ba94565e",
            displayName: "开发环境",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/开发环境.png",
            children: [],
            items: [{
                itemId: "88c8d75d-9f9b-4491-8b04-0d1457fd230b",
                displayName: "Catalyzex",
                description: "查找论文、开源代码工具",
                logoPath: envConfig.baseUrl + "img/menu/Catalyzex.png",
                websiteUrl: "https://www.catalyzex.com/",
                redirectType: "DETAIL"
            }, {
                itemId: "cc968329-c07f-4e63-a1e1-84d954e6b994",
                displayName: "w3schools",
                description: "科研工具、AI工具、编程学习等",
                logoPath: envConfig.baseUrl + "img/menu/w3schools.png",
                websiteUrl: "https://www.w3schools.com/html/default.asp",
                redirectType: "DETAIL"
            }, {
                itemId: "83181c4f-3ac4-43f1-8c9d-1e55744db67d",
                displayName: "Pycharm",
                description: "代码编译器",
                logoPath: envConfig.baseUrl + "img/menu/Pycharm.png",
                websiteUrl: "https://www.jetbrains.com/pycharm/#",
                redirectType: "DETAIL"
            }, {
                itemId: "35bb0408-22e1-4270-97d2-df4ccecfdd7a",
                displayName: "Visual Studio Code",
                description: "代码编译器",
                logoPath: envConfig.baseUrl + "img/menu/VisualStudioCode.png",
                websiteUrl: "https://code.visualstudio.com",
                redirectType: "DETAIL"
            }, {
                itemId: "90c1391c-2b3d-4f0e-ada9-0a4cc3ff20ef",
                displayName: "Jupyter Notebook",
                description: "开源Web应用",
                logoPath: envConfig.baseUrl + "img/menu/JupyterNotebook.png",
                websiteUrl: "https://jupyter.org",
                redirectType: "DETAIL"
            }, {
                itemId: "1eea8c54-6b42-481e-b601-04a68440fc6e",
                displayName: "Cursor",
                description: "Ai代码编辑器",
                logoPath: envConfig.baseUrl + "img/menu/Cursor.png",
                websiteUrl: "https://www.cursor.com/cn",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "2f5537ef-d976-4b22-8673-2e9da969ba63",
            displayName: "代码管理",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/代码管理.png",
            children: [],
            items: [{
                itemId: "e4fa4d9a-65c9-4c20-bfa4-e203d7055d2f",
                displayName: "LabML.ai ",
                description: "代码逐行解读网站",
                logoPath: envConfig.baseUrl + "img/menu/LabML.ai.png",
                websiteUrl: "https://nn.labml.ai/",
                redirectType: "DETAIL"
            }, {
                itemId: "d061d995-6588-42d1-989f-e28ab9f02307",
                displayName: "Developer Roadmaps",
                description: "开发者路线图资源库 ",
                logoPath: envConfig.baseUrl + "img/menu/DeveloperRoadmaps.png",
                websiteUrl: "https://roadmap.sh",
                redirectType: "DETAIL"
            }, {
                itemId: "9278311c-3ab2-4c54-a2a2-4fc909cfd59f",
                displayName: "Github",
                description: "全球最流行的代码托管平台",
                logoPath: envConfig.baseUrl + "img/menu/Github.png",
                websiteUrl: "https://github.com/",
                redirectType: "DETAIL"
            }, {
                itemId: "4e6a1bfa-d7cf-45c6-a637-20256fba5e91",
                displayName: "GitLab",
                description: "一站式代码托管和研发协作平台",
                logoPath: envConfig.baseUrl + "img/menu/GitLab.png",
                websiteUrl: "https://gitlab.cn/",
                redirectType: "DETAIL"
            }, {
                itemId: "d6e1d3bb-1e1d-4d81-834c-798ca1a82860",
                displayName: "Gitee",
                description: "代码托管、企业研发效能平台",
                logoPath: envConfig.baseUrl + "img/menu/Gitee.png",
                websiteUrl: "https://gitee.com/",
                redirectType: "DETAIL"
            }, {
                itemId: "aebc86ab-99cf-4ffe-8b92-d59ddb3ab401",
                displayName: "Bitbucket",
                description: "源代码托管网站",
                logoPath: envConfig.baseUrl + "img/menu/Bitbucket.png",
                websiteUrl: "https://bitbucket.org",
                redirectType: "DETAIL"
            }, {
                itemId: "4307df4a-e03f-4223-bf29-eba3b8e41db9",
                displayName: "3Blue1Brown",
                description: "斯坦福神经网络动画",
                logoPath: envConfig.baseUrl + "img/menu/3Blue1Brown.png",
                websiteUrl: "https://www.3blue1brown.com/",
                redirectType: "DETAIL"
            }, {
                itemId: "20efda4d-c368-4586-875c-6656d5092594",
                displayName: "Gerrit",
                description: "基于Git的免费开源代码审查工具‌",
                logoPath: envConfig.baseUrl + "img/menu/Gerrit.png",
                websiteUrl: "https://www.gerritcodereview.com",
                redirectType: "DETAIL"
            }]
        }],
        items: []
    }, {
        nodeId: "81eb4d6e-4324-4615-8466-7ccf291306c3",
        displayName: "人工智能",
        nodeType: "MENU",
        iconPath: "line-md:thumbs-up",
        children: [{
            nodeId: "66ddb2cd-7d57-4f60-83f9-8422de756915",
            displayName: "强化学习",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/强化学习.png",
            children: [],
            items: [{
                itemId: "97446ebc-6a06-4268-b801-b3963df8b821",
                displayName: "OpenAI Gym",
                description: "OpenAI 提供的强化学习工具包",
                logoPath: envConfig.baseUrl + "img/menu/OpenAIGym.png",
                websiteUrl: "https://gymnasium.farama.org",
                redirectType: "DETAIL"
            }, {
                itemId: "004c367e-93d2-40d1-b786-d099af45c7cc",
                displayName: "Ray RLLib",
                description: "Ray 的强化学习库，支持大规模分布式训练",
                logoPath: envConfig.baseUrl + "img/menu/RayRLLib.png",
                websiteUrl: "https://www.ray.io",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "d973119c-7b65-4454-8fab-cca2a0661be0",
            displayName: "机器学习",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/机器学习.png",
            children: [],
            items: [{
                itemId: "8174ee84-498d-410a-9fe2-12274c549796",
                displayName: "scikit-learn",
                description: "Python 的一个机器学习库",
                logoPath: envConfig.baseUrl + "img/menu/scikit-learn.png",
                websiteUrl: "https://scikit-learn.org/stable/",
                redirectType: "DETAIL"
            }, {
                itemId: "0b1772b0-4c72-41e3-9da2-d04050cca6a8",
                displayName: "AWS AI & ML",
                description: "Amazon Web Services 提供了广泛的人工智能和机器学习服务",
                logoPath: envConfig.baseUrl + "img/menu/AWSAI&ML.png",
                websiteUrl: "https://aws.amazon.com/cn/ai/machine-learning/",
                redirectType: "DETAIL"
            }, {
                itemId: "2531a4d3-d63f-4034-90f3-f88b4512d4f7",
                displayName: "Microsoft Azure AI",
                description: "提供了多个人工智能和机器学习服务",
                logoPath: envConfig.baseUrl + "img/menu/MicrosoftAzureAI.png",
                websiteUrl: "https://azure.microsoft.com/en-us/services/machine-learning/",
                redirectType: "DETAIL"
            }, {
                itemId: "5eb287f1-544f-411f-82d4-5a380dbf3b04",
                displayName: "XGBoost",
                description: "高效的梯度提升决策树（GBDT）库",
                logoPath: envConfig.baseUrl + "img/menu/XGBoost.png",
                websiteUrl: "https://xgboost.ai",
                redirectType: "DETAIL"
            }, {
                itemId: "172f8e8d-0534-4d8f-ac57-d13f0c8068c9",
                displayName: "LightGBM",
                description: "一个高效的分布式梯度提升框架",
                logoPath: envConfig.baseUrl + "img/menu/LightGBM.png",
                websiteUrl: "https://lightgbm.readthedocs.io/en/stable/",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "b833f058-f0f3-4e7b-92fe-6d1f7ab489cb",
            displayName: "深度学习",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/深度学习.png",
            children: [],
            items: [{
                itemId: "4a63a96a-4c23-42ad-a14a-86cd93f0ad35",
                displayName: "TensorFlow",
                description: "由 Google 开发的开源机器学习框架",
                logoPath: envConfig.baseUrl + "img/menu/TensorFlow.png",
                websiteUrl: "https://www.tensorflow.org/",
                redirectType: "DETAIL"
            }, {
                itemId: "efe17d8e-1e64-43dd-90cc-919221ee5d5c",
                displayName: "PyTorch",
                description: "由 Facebook 提供的深度学习框架",
                logoPath: envConfig.baseUrl + "img/menu/PyTorch.png",
                websiteUrl: "https://pytorch.org",
                redirectType: "DETAIL"
            }, {
                itemId: "4d812ed8-1f2a-4611-8ad2-f5a9ffc5e775",
                displayName: "Keras",
                description: "高层次神经网络 API",
                logoPath: envConfig.baseUrl + "img/menu/Keras.png",
                websiteUrl: "https://keras.io",
                redirectType: "DETAIL"
            }, {
                itemId: "bb568d8d-a5f2-4a79-a6eb-514c16f63aeb",
                displayName: "Caffe",
                description: "一个深度学习框架",
                logoPath: envConfig.baseUrl + "img/menu/Caffe.png",
                websiteUrl: "http://caffe.berkeleyvision.org",
                redirectType: "DETAIL"
            }, {
                itemId: "863d7882-3fb5-46f4-a0d7-e8c1caab8413",
                displayName: "MXNet",
                description: "开源深度学习框架",
                logoPath: envConfig.baseUrl + "img/menu/MXNet.png",
                websiteUrl: "https://mxnet.apache.org",
                redirectType: "DETAIL"
            }, {
                itemId: "d7974dd3-e739-4a21-8ee5-9accb262dd88",
                displayName: "Fast.ai",
                description: "简化深度学习框架的工具和库",
                logoPath: envConfig.baseUrl + "img/menu/Fast.ai.png",
                websiteUrl: "https://www.fast.ai",
                redirectType: "DETAIL"
            }]
        }],
        items: []
    }, {
        nodeId: "b0110301-cbf0-4b73-b0d8-775b2fe3c9ac",
        displayName: "可视化",
        nodeType: "MENU",
        iconPath: "line-md:thumbs-up",
        children: [{
            nodeId: "e038f051-f5f4-42a6-a710-4bd4b8c87a4a",
            displayName: "绘图工具",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/绘图工具.png",
            children: [],
            items: [{
                itemId: "77fa4611-fcd7-44ee-ae31-73623167fee0",
                displayName: "R Graph Gallery",
                description: "R绘图网站",
                logoPath: envConfig.baseUrl + "img/menu/RGraphGallery.png",
                websiteUrl: "https://r-graph-gallery.com/",
                redirectType: "DETAIL"
            }, {
                itemId: "e2ba68ba-d2e1-42ba-851b-1f5cb57b2c9f",
                displayName: "Zetane Viewer",
                description: "神经网络3D可视化工具",
                logoPath: envConfig.baseUrl + "img/menu/ZetaneViewer.png",
                websiteUrl: "https://github.com/Zetane/viewer",
                redirectType: "DETAIL"
            }, {
                itemId: "584905e4-7105-4f5e-99dd-2d2047337bc4",
                displayName: "Zetane Insight Engine",
                description: "AI驱动的数据可视化工具",
                logoPath: envConfig.baseUrl + "img/menu/ZetaneInsightEngine.png",
                websiteUrl: "https://zetane.com/insight-engine",
                redirectType: "DETAIL"
            }, {
                itemId: "5059d9a4-4dd0-48d3-aafe-679b45877386",
                displayName: "NN-SVG",
                description: "科研绘图神器",
                logoPath: envConfig.baseUrl + "img/menu/NN-SVG.png",
                websiteUrl: "https://alexlenail.me/NN-SVG/",
                redirectType: "DETAIL"
            }, {
                itemId: "4d890da4-e66e-47df-936a-52bb5dbbbfd1",
                displayName: "pyCirclize",
                description: "圆形科研图绘制工具",
                logoPath: envConfig.baseUrl + "img/menu/pyCirclize.png",
                websiteUrl: "https://moshi4.github.io/pyCirclize/getting_started/",
                redirectType: "DETAIL"
            }, {
                itemId: "6638b06c-fce6-451b-9f39-795f894839f8",
                displayName: "Python Graph Gallery ",
                description: "科研绘图",
                logoPath: envConfig.baseUrl + "img/menu/PythonGraphGallery.png",
                websiteUrl: "https://python-graph-gallery.com/",
                redirectType: "DETAIL"
            }, {
                itemId: "1afb36ba-9f12-4662-8140-cbd1fe43cd72",
                displayName: "Hiplot",
                description: "数据可视化平台",
                logoPath: envConfig.baseUrl + "img/menu/Hiplot.png",
                websiteUrl: "https://hiplot.cn/",
                redirectType: "DETAIL"
            }, {
                itemId: "4de781c6-2d2d-49b2-8713-0542e138fa3e",
                displayName: "ECharts",
                description: "科研数据图代码网站",
                logoPath: envConfig.baseUrl + "img/menu/ECharts.png",
                websiteUrl: "https://echarts.apache.org/examples/zh/index.html#chart-type-map",
                redirectType: "DETAIL"
            }, {
                itemId: "9f7381c2-201a-49d7-b316-46df07cfb88b",
                displayName: "Matplotlib",
                description: "Python 数据可视化库",
                logoPath: envConfig.baseUrl + "img/menu/Matplotlib.png",
                websiteUrl: "https://matplotlib.org",
                redirectType: "DETAIL"
            }, {
                itemId: "f830544f-dd60-409b-9148-88618560fecb",
                displayName: "ggplot",
                description: "基于R语言的图形绘制包",
                logoPath: envConfig.baseUrl + "img/menu/ggplot.png",
                websiteUrl: "https://ggplot2.tidyverse.org",
                redirectType: "DETAIL"
            }, {
                itemId: "08dc711d-85a4-4887-b1fd-48bf1c05984a",
                displayName: "Power Point(PPT)",
                description: "一款微软公司开发的幻灯片展示软件",
                logoPath: envConfig.baseUrl + "img/menu/PowerPoint(PPT).png",
                websiteUrl: "https://www.microsoft.com/zh-cn/microsoft-365/powerpoint",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "63c193cb-bb35-40c9-bfa2-36ca85eb865b",
            displayName: "数据处理与清洗",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/数据处理与清洗.png",
            children: [],
            items: [{
                itemId: "66187e5d-e955-4688-8606-5e59d667b892",
                displayName: "Pandas",
                description: "强大的数据处理和分析库",
                logoPath: envConfig.baseUrl + "img/menu/Pandas.png",
                websiteUrl: "https://pandas.pydata.org",
                redirectType: "DETAIL"
            }, {
                itemId: "fa3423b0-1a9c-4773-bf18-835561c1892e",
                displayName: "Numpy",
                description: "Python 科学计算库，支持多维数组和矩阵运算",
                logoPath: envConfig.baseUrl + "img/menu/Numpy.png",
                websiteUrl: "https://numpy.org",
                redirectType: "DETAIL"
            }, {
                itemId: "7eae3c78-13a1-407e-bc86-3598e9a07641",
                displayName: "Dask",
                description: "用于并行计算和大数据处理的 Python 库",
                logoPath: envConfig.baseUrl + "img/menu/Dask.png",
                websiteUrl: "https://dask.org",
                redirectType: "DETAIL"
            }, {
                itemId: "af890a51-a3f0-40b2-8fc8-919b359f6a52",
                displayName: "Vaex",
                description: "一个用于大规模数据集的延迟计算和可视化的 Python 库",
                logoPath: envConfig.baseUrl + "img/menu/Vaex.png",
                websiteUrl: "https://vaex.io",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "b46c5f19-a9e0-4959-aa51-00aa50639412",
            displayName: "算法可视化",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/算法可视化.png",
            children: [],
            items: [{
                itemId: "e50cb09e-3fc9-440e-9cef-d70652804bf4",
                displayName: "Roboflow Universe",
                description: "机器学习数据集网站",
                logoPath: envConfig.baseUrl + "img/menu/RoboflowUniverse.png",
                websiteUrl: "https://universe.roboflow.com/",
                redirectType: "DETAIL"
            }, {
                itemId: "366e8cd4-6e99-4628-ac54-636765ff265d",
                displayName: "TensorFlow Playground",
                description: "快速理解神经网络原理的网站",
                logoPath: envConfig.baseUrl + "img/menu/TensorFlowPlayground.png",
                websiteUrl: "https://playground.tensorflow.org/",
                redirectType: "DETAIL"
            }, {
                itemId: "c5eacc6b-428d-4322-b51c-319b21630cfd",
                displayName: "Deep-ML",
                description: "机器学习Leetcode算法刷题",
                logoPath: envConfig.baseUrl + "img/menu/Deep-ML.png",
                websiteUrl: "https://www.deep-ml.com/",
                redirectType: "DETAIL"
            }, {
                itemId: "946931ab-a1dd-47e2-9c9d-b0fc5b656cda",
                displayName: "AI by Hand",
                description: "一个 Substack 电子邮件订阅博客",
                logoPath: envConfig.baseUrl + "img/menu/AIbyHand.png",
                websiteUrl: "https://aibyhand.substack.com/",
                redirectType: "DETAIL"
            }, {
                itemId: "d2075af9-f5df-433d-96bb-914b81db5932",
                displayName: "Algorithm Visualizer",
                description: "算法可视化网站",
                logoPath: envConfig.baseUrl + "img/menu/AlgorithmVisualizer.png",
                websiteUrl: "https://algorithm-visualizer.org/",
                redirectType: "DETAIL"
            }, {
                itemId: "e98c6c32-b38b-46e7-8ab2-df5fe5e07820",
                displayName: "One Small Step",
                description: "大模型前沿技术科普",
                logoPath: envConfig.baseUrl + "img/menu/OneSmallStep.png",
                websiteUrl: "https://github.com/karminski/one-small-step?tab=readme-ov-file",
                redirectType: "DETAIL"
            }, {
                itemId: "9a9ff5ef-89f1-4bad-9b5d-524327034e41",
                displayName: "Transformer Explainer",
                description: "Transformer可视化",
                logoPath: envConfig.baseUrl + "img/menu/TransformerExplainer.png",
                websiteUrl: "https://github.com/poloclub/transformer-explainer?tab=readme-ov-file",
                redirectType: "DETAIL"
            }, {
                itemId: "4644bb8c-60cd-428c-9382-b61f4643a972",
                displayName: "100 Days of ML Code",
                description: "机器学习100天项目",
                logoPath: envConfig.baseUrl + "img/menu/100DaysofMLCode.png",
                websiteUrl: "https://github.com/Avik-Jain/100-Days-of-ML-Code-Chinese-Version?tab=readme-ov-file",
                redirectType: "DETAIL"
            }, {
                itemId: "f9d4012a-628a-403f-a0f8-56345ad9adda",
                displayName: "Wandb Weave",
                description: "全自动调参工具",
                logoPath: envConfig.baseUrl + "img/menu/WandbWeave.png",
                websiteUrl: "https://wandb.ai/site/weave/",
                redirectType: "DETAIL"
            }, {
                itemId: "ed529197-c125-48cf-bbfd-686b3f0fbbb1",
                displayName: "TensorBoard",
                description: "TensorFlow 提供的可视化工具",
                logoPath: envConfig.baseUrl + "img/menu/TensorBoard.png",
                websiteUrl: "https://www.tensorflow.org/tensorboard",
                redirectType: "DETAIL"
            }, {
                itemId: "7ebf1e85-35c3-4ec0-abe9-ea098b9f9c36",
                displayName: "Plotly",
                description: "用于创建交互式图表和可视化的库",
                logoPath: envConfig.baseUrl + "img/menu/Plotly.png",
                websiteUrl: "https://plotly.com",
                redirectType: "DETAIL"
            }, {
                itemId: "db79d6c7-0c86-427f-910a-2402668aee64",
                displayName: "Seaborn",
                description: "基于Matplotlib的Python库",
                logoPath: envConfig.baseUrl + "img/menu/Seaborn.png",
                websiteUrl: "https://seaborn.pydata.org",
                redirectType: "DETAIL"
            }]
        }],
        items: []
    }, {
        nodeId: "6b7597dd-f4e6-41c6-a503-cf08c1c04b3e",
        displayName: "数据集",
        nodeType: "MENU",
        iconPath: "line-md:thumbs-up",
        children: [{
            nodeId: "4b9fb6b4-a8de-4046-aad2-c0553bfa1a67",
            displayName: "数据管理",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/数据管理.png",
            children: [],
            items: [{
                itemId: "11c92bea-c9ce-4393-87d0-b7321253ade1",
                displayName: "VisualData",
                description: "集合了多个计算机视觉数据集的在线平台",
                logoPath: envConfig.baseUrl + "img/menu/VisualData.png",
                websiteUrl: "https://www.visualdata.io/",
                redirectType: "DETAIL"
            }, {
                itemId: "67e3c8d4-d6b2-49ae-b9a3-2bd5b1db9c69",
                displayName: "Kaggle",
                description: "著名的数据科学平台",
                logoPath: envConfig.baseUrl + "img/menu/Kaggle.png",
                websiteUrl: "https://www.kaggle.com/datasets",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "731a2eca-fa5f-4669-940c-2c87f9352836",
            displayName: "数据平台",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/数据平台.png",
            children: [],
            items: [{
                itemId: "5c088da9-d1fe-4f40-aaef-24bc870a15b3",
                displayName: "Amazon Web Services (AWS) Public Datasets",
                description: "AWS上的开放数据注册",
                logoPath: envConfig.baseUrl + "img/menu/AmazonWebServices(AWS)PublicDatasets.png",
                websiteUrl: "https://registry.opendata.aws",
                redirectType: "DETAIL"
            }, {
                itemId: "adcc2844-bbb4-4d48-b936-6ebba6856ba3",
                displayName: "Microsoft Research Open Data",
                description: "微软研究院提供的公开数据集",
                logoPath: envConfig.baseUrl + "img/menu/MicrosoftResearchOpenData.png",
                websiteUrl: "https://www.microsoft.com/en-us/research/project/open-data/",
                redirectType: "DETAIL"
            }, {
                itemId: "95b9a636-b26d-4d33-aebe-cc3d30eab470",
                displayName: "Stanford Large Scale Data Sets",
                description: "斯坦福大学提供了一些大规模的公开数据集",
                logoPath: envConfig.baseUrl + "img/menu/StanfordLargeScaleDataSets.png",
                websiteUrl: "http://web.stanford.edu/class/cs224w/",
                redirectType: "DETAIL"
            }, {
                itemId: "ec4c7159-7313-4a8e-9f05-81a1769a08a4",
                displayName: "GitHub",
                description: "很多开发者和研究者在 GitHub 上发布数据集",
                logoPath: envConfig.baseUrl + "img/menu/GitHub.png",
                websiteUrl: "https://github.com/",
                redirectType: "DETAIL"
            }, {
                itemId: "964db066-ecc6-429f-afa6-4a06caafefdd",
                displayName: "OpenAI Datasets",
                description: "用于人工智能和机器学习研究的公开数据集",
                logoPath: envConfig.baseUrl + "img/menu/OpenAIDatasets.png",
                websiteUrl: "https://openai.com/research/",
                redirectType: "DETAIL"
            }, {
                itemId: "2443b527-5ed6-4073-be69-8a7eba53034f",
                displayName: "Browse State-of-the-Art",
                description: "数据集网站",
                logoPath: envConfig.baseUrl + "img/menu/BrowseState-of-the-Art.png",
                websiteUrl: "https://paperswithcode.com/sota",
                redirectType: "DETAIL"
            }, {
                itemId: "ca2b828b-8179-4859-8c93-3d9236c8f0c4",
                displayName: "UCI Machine Learning Repository",
                description: "最早的机器学习数据集存储库之一",
                logoPath: envConfig.baseUrl + "img/menu/UCIMachineLearningRepository.png",
                websiteUrl: "https://archive.ics.uci.edu",
                redirectType: "DETAIL"
            }, {
                itemId: "eacf3ee7-dfc7-498c-a065-e35eca043169",
                displayName: "ChinaXiv",
                description: "中科院论文预发布平台",
                logoPath: envConfig.baseUrl + "img/menu/ChinaXiv.png",
                websiteUrl: "https://chinaxiv.org/home.htm",
                redirectType: "DETAIL"
            }]
        }],
        items: []
    }, {
        nodeId: "0889929e-c5ad-4a88-83bd-6ebac1042d0a",
        displayName: "研究领域",
        nodeType: "MENU",
        iconPath: "line-md:thumbs-up",
        children: [{
            nodeId: "11174944-7952-40a5-a30a-ae59c209e572",
            displayName: "自然图像",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/自然图像.png",
            children: [],
            items: [{
                itemId: "9c8d95cf-a8a4-4c72-bd80-5852530b52cd",
                displayName: "OpenCV",
                description: "广泛使用的计算机视觉库，支持图像和视频处理",
                logoPath: envConfig.baseUrl + "img/menu/OpenCV.png",
                websiteUrl: "https://opencv.org",
                redirectType: "DETAIL"
            }, {
                itemId: "dd39b0e4-ef1c-40f0-87f2-4009b44096b4",
                displayName: "Dlib",
                description: "C++ 编写的机器学习库，特别适用于图像处理和计算机视觉任务",
                logoPath: envConfig.baseUrl + "img/menu/Dlib.png",
                websiteUrl: "https://dlib.net",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "e9849ede-929f-4c4a-9f80-a8def1e15221",
            displayName: "知识图谱",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/知识图谱.png",
            children: [],
            items: [{
                itemId: "1b4c033d-f19d-48bd-b05b-29016152e1d5",
                displayName: "Neo4j",
                description: "一种图数据库",
                logoPath: envConfig.baseUrl + "img/menu/Neo4j.png",
                websiteUrl: "https://neo4j.com",
                redirectType: "DETAIL"
            }, {
                itemId: "2f53eb0d-c219-4382-903b-2173cb8ebd9a",
                displayName: "RDFLib",
                description: "Python库",
                logoPath: envConfig.baseUrl + "img/menu/RDFLib.png",
                websiteUrl: "https://rdflib.readthedocs.io",
                redirectType: "DETAIL"
            }, {
                itemId: "f58725b6-4299-43bf-9b61-3170d41c6559",
                displayName: "GraphDB",
                description: "一个高效的图数据库",
                logoPath: envConfig.baseUrl + "img/menu/GraphDB.png",
                websiteUrl: "https://www.ontotext.com/products/graphdb",
                redirectType: "DETAIL"
            }, {
                itemId: "3d7ecb46-e6be-44db-b570-5ff457697089",
                displayName: "Blazegraph",
                description: "开源图数据库",
                logoPath: envConfig.baseUrl + "img/menu/Blazegraph.png",
                websiteUrl: "https://blazegraph.com",
                redirectType: "DETAIL"
            }, {
                itemId: "58f69cb8-c8da-4e1b-8435-fef141ad4753",
                displayName: "PyTorch Geometric",
                description: "一个基于PyTorch的图神经网络库",
                logoPath: envConfig.baseUrl + "img/menu/PyTorchGeometric.png",
                websiteUrl: "https://pytorch-geometric.readthedocs.io",
                redirectType: "DETAIL"
            }, {
                itemId: "888cca02-3d87-42c1-9c3d-0411065a68a7",
                displayName: "DGL (Deep Graph Library)",
                description: "开源的图神经网络库",
                logoPath: envConfig.baseUrl + "img/menu/DGL(DeepGraphLibrary).png",
                websiteUrl: "https://www.dgl.ai",
                redirectType: "DETAIL"
            }, {
                itemId: "c6e462c9-648a-4a99-b641-b96053f83a89",
                displayName: "Spektral",
                description: "基于Keras的图神经网络库",
                logoPath: envConfig.baseUrl + "img/menu/Spektral.png",
                websiteUrl: "https://graphneural.network",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "f7a25122-99a9-44ca-a66b-25609cea6440",
            displayName: "图神经网络",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/图神经网络.png",
            children: [],
            items: [{
                itemId: "92e9fc7e-beab-405e-9c15-f5a98a4fed76",
                displayName: "PyTorch Geometric",
                description: "PyTorch 的图神经网络库",
                logoPath: envConfig.baseUrl + "img/menu/PyTorchGeometric.png",
                websiteUrl: "https://pytorch-geometric.readthedocs.io",
                redirectType: "DETAIL"
            }, {
                itemId: "74fcc403-ac34-4469-b529-14b3d043e43f",
                displayName: "DGL (Deep Graph Library)",
                description: "开源的图神经网络库",
                logoPath: envConfig.baseUrl + "img/menu/DGL(DeepGraphLibrary).png",
                websiteUrl: "https://www.dgl.ai",
                redirectType: "DETAIL"
            }, {
                itemId: "bfef6ecb-f6c6-4b8d-b44e-842aab368cc0",
                displayName: "GraphSAGE",
                description: "图神经网络算法",
                logoPath: envConfig.baseUrl + "img/menu/GraphSAGE.png",
                websiteUrl: "https://github.com/williamleif/graphsage-simple",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "cec88078-cd6c-4ff9-b09d-d50537fb781a",
            displayName: "大模型",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/大模型.png",
            children: [],
            items: [{
                itemId: "1c157749-8d7d-429d-b70b-aefbbdbb00a3",
                displayName: "OpenAI",
                description: "提供强大的人工智能模型",
                logoPath: envConfig.baseUrl + "img/menu/OpenAI.png",
                websiteUrl: "https://openai.com",
                redirectType: "DETAIL"
            }, {
                itemId: "cb843d3d-67bd-433a-baac-04d1866f39b6",
                displayName: "BERT",
                description: "Google 提出的预训练语言模型",
                logoPath: envConfig.baseUrl + "img/menu/BERT.png",
                websiteUrl: "https://github.com/google-research/bert",
                redirectType: "DETAIL"
            }, {
                itemId: "ea1ad4f1-9f2b-4fa9-9707-090f5e60be94",
                displayName: "T5",
                description: "Google 提出的一个统一文本转换框架",
                logoPath: envConfig.baseUrl + "img/menu/T5.png",
                websiteUrl: "https://github.com/google-research/text-to-text-transfer-transformer",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "04a331ce-e830-4ffa-92ec-27e0e3b369fd",
            displayName: "时间序列",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/时间序列.png",
            children: [],
            items: [{
                itemId: "c61c229d-b13c-460c-933a-2f6c9d18b41f",
                displayName: "Prophet",
                description: "由 Facebook 开发的时间序列预测库",
                logoPath: envConfig.baseUrl + "img/menu/Prophet.png",
                websiteUrl: "https://facebook.github.io/prophet",
                redirectType: "DETAIL"
            }, {
                itemId: "33e3c9b9-32c5-4b6f-9f51-316009c34f19",
                displayName: "Statsmodels",
                description: "python 中用于统计建模的库",
                logoPath: envConfig.baseUrl + "img/menu/Statsmodels.png",
                websiteUrl: "https://www.statsmodels.org",
                redirectType: "DETAIL"
            }, {
                itemId: "173fc0bb-23ab-40c9-bd26-c42d502322a3",
                displayName: "TSlearn",
                description: "用于时间序列数据学习的 Python 库",
                logoPath: envConfig.baseUrl + "img/menu/TSlearn.png",
                websiteUrl: "https://tslearn.readthedocs.io",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "e900937d-f86c-43a2-af88-600253197c7d",
            displayName: "计算机视觉",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/计算机视觉.png",
            children: [],
            items: [{
                itemId: "295c95d9-1927-43b0-99d7-e5d40c663ecb",
                displayName: "YOLO",
                description: "用于物体检测的深度学习模型，支持实时目标检测",
                logoPath: envConfig.baseUrl + "img/menu/YOLO.png",
                websiteUrl: "https://pjreddie.com/darknet/yolo/",
                redirectType: "DETAIL"
            }, {
                itemId: "1b37f14d-5d22-407a-a315-c11c2b2cd07b",
                displayName: "Faster R-CNN",
                description: "一种用于物体检测的卷积神经网络",
                logoPath: envConfig.baseUrl + "img/menu/FasterR-CNN.png",
                websiteUrl: "https://github.com/rbgirshick/py-faster-rcnn",
                redirectType: "DETAIL"
            }, {
                itemId: "0567c4b9-0e2d-4e7d-98f4-f6adf00ff626",
                displayName: "Mask R-CNN",
                description: "Faster R-CNN 的扩展，能够进行实例分割",
                logoPath: envConfig.baseUrl + "img/menu/MaskR-CNN.png",
                websiteUrl: "https://github.com/matterport/Mask_RCNN",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "4b519b1c-c7a4-4b98-b568-59b418a9ccc1",
            displayName: "自然语言处理",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/自然语言处理.png",
            children: [],
            items: [{
                itemId: "44fa6f07-e3a1-4df6-a9dd-8b0d3a829386",
                displayName: "Hugging Face",
                description: "专注于自然语言处理",
                logoPath: envConfig.baseUrl + "img/menu/HuggingFace.png",
                websiteUrl: "https://huggingface.com/",
                redirectType: "DETAIL"
            }, {
                itemId: "b907c404-e94a-4373-a58f-40964ab26871",
                displayName: "IBM Watson",
                description: "IBM Watson 是 IBM 提供的 AI 平台",
                logoPath: envConfig.baseUrl + "img/menu/IBMWatson.png",
                websiteUrl: "https://www.ibm.com/cn-zh/watson",
                redirectType: "DETAIL"
            }, {
                itemId: "8d9553ed-d7e2-4569-983d-bd3e44a9368c",
                displayName: "spaCy",
                description: "一个工业级自然语言处理库",
                logoPath: envConfig.baseUrl + "img/menu/spaCy.png",
                websiteUrl: "https://spacy.io",
                redirectType: "DETAIL"
            }, {
                itemId: "185dadd5-8a6f-4419-90da-e6acc08eafcc",
                displayName: "NLTK",
                description: "Python 中最广泛使用的自然语言处理库之一",
                logoPath: envConfig.baseUrl + "img/menu/NLTK.png",
                websiteUrl: "https://www.nltk.org/",
                redirectType: "DETAIL"
            }, {
                itemId: "38a28f73-c238-475e-8079-5955a8ecacfe",
                displayName: "Transformers",
                description: "用于处理预训练的 Transformer 模型",
                logoPath: envConfig.baseUrl + "img/menu/Transformers.png",
                websiteUrl: "https://huggingface.co/transformers",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "136923cc-fb58-4ed8-a6d9-e9cd4968269a",
            displayName: "三维重建与建模",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/三维重建与建模.png",
            children: [],
            items: [{
                itemId: "36888226-13b2-4e08-b872-af683bd2624e",
                displayName: "Open3D",
                description: "支持三维数据处理、可视化和分析的开源库",
                logoPath: envConfig.baseUrl + "img/menu/Open3D.png",
                websiteUrl: "http://www.open3d.org",
                redirectType: "DETAIL"
            }, {
                itemId: "287b7571-ef06-414b-a55b-ce19fca55af5",
                displayName: "PyVista",
                description: "用于 3D 数据可视化和分析的 Python 库，基于 VTK 库",
                logoPath: envConfig.baseUrl + "img/menu/PyVista.png",
                websiteUrl: "https://pyvista.org",
                redirectType: "DETAIL"
            }, {
                itemId: "9df0d6e6-3744-481f-9aa9-284b55d8a091",
                displayName: "MeshLab",
                description: "用于处理和编辑三维网格数据的开源软件",
                logoPath: envConfig.baseUrl + "img/menu/MeshLab.png",
                websiteUrl: "https://www.meshlab.net",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "161b0cdc-cbaf-43ab-9efd-c2e64ef51448",
            displayName: "医学图像",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/医学图像.png",
            children: [],
            items: [{
                itemId: "88792703-ad8d-4013-b92f-3232a3768ac3",
                displayName: "SimpleITK",
                description: "一个简化ITK的Python接口",
                logoPath: envConfig.baseUrl + "img/menu/SimpleITK.png",
                websiteUrl: "https://simpleitk.readthedocs.io/en/master/",
                redirectType: "DETAIL"
            }, {
                itemId: "d17ceca0-0ada-4b2c-98e1-5524da9d20c2",
                displayName: "MedPy",
                description: "医学图像处理的 Python 库",
                logoPath: envConfig.baseUrl + "img/menu/MedPy.png",
                websiteUrl: "https://loli.github.io/medpy",
                redirectType: "DETAIL"
            }, {
                itemId: "aada9d1c-acf3-48ae-a4b6-5d112b6e9051",
                displayName: "3D Slicer",
                description: "开源医学图像分析软件",
                logoPath: envConfig.baseUrl + "img/menu/3DSlicer.png",
                websiteUrl: "https://www.slicer.org",
                redirectType: "DETAIL"
            }]
        }],
        items: []
    }, {
        nodeId: "60cd5b18-e076-4637-ac8f-3f9d6434ff66",
        displayName: "文献与期刊",
        nodeType: "MENU",
        iconPath: "line-md:thumbs-up",
        children: [{
            nodeId: "70e45c25-c9cf-43c5-b9b1-faf307ef67c9",
            displayName: "会议与竞赛",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/会议与竞赛.png",
            children: [],
            items: [{
                itemId: "daa01f1c-c99d-42cf-9dcb-11843cdb5093",
                displayName: "CVPR",
                description: "计算机视觉领域最顶级的会议之一",
                logoPath: envConfig.baseUrl + "img/menu/CVPR.png",
                websiteUrl: "https://cvpr.thecvf.com",
                redirectType: "DETAIL"
            }, {
                itemId: "1cb680e8-910b-470a-903e-c0e12a9e2bf3",
                displayName: "NeurIPS",
                description: "机器学习和计算神经科学领域的顶级会议",
                logoPath: envConfig.baseUrl + "img/menu/NeurIPS.png",
                websiteUrl: "https://nips.cc",
                redirectType: "DETAIL"
            }, {
                itemId: "0aa9c0bc-4bba-4fb1-bd17-8287d1f9ddf2",
                displayName: "ICML",
                description: "全球顶级机器学习会议之一",
                logoPath: envConfig.baseUrl + "img/menu/ICML.png",
                websiteUrl: "https://icml.cc",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "7a29ff34-30eb-4913-ae35-282b9d7eec59",
            displayName: "必读期刊",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/必读期刊.png",
            children: [],
            items: [{
                itemId: "60655585-f060-466a-be8d-697a80ef14a8",
                displayName: "IEEE",
                description: "关注神经网络及其学习系统的国际学术期刊",
                logoPath: envConfig.baseUrl + "img/menu/IEEE.png",
                websiteUrl: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=72",
                redirectType: "DETAIL"
            }, {
                itemId: "dbbefbb4-ed61-4fdb-ab32-f5d6d0d40dc3",
                displayName: "Neural Networks",
                description: "专注于神经网络的各类研究",
                logoPath: envConfig.baseUrl + "img/menu/NeuralNetworks.png",
                websiteUrl: "https://www.sciencedirect.com/journal/neural-networks",
                redirectType: "DETAIL"
            }, {
                itemId: "f7531f3f-5383-4c1c-ad0f-64edfcfbf1ed",
                displayName: "Journal of Machine Learning Research",
                description: "机器学习领域的重要期刊",
                logoPath: envConfig.baseUrl + "img/menu/JournalofMachineLearningResearch.png",
                websiteUrl: "http://www.jmlr.org",
                redirectType: "DETAIL"
            }]
        }],
        items: []
    }, {
        nodeId: "9f75eb1d-236e-40be-8540-ff1dde759828",
        displayName: "前沿技术",
        nodeType: "MENU",
        iconPath: "line-md:thumbs-up",
        children: [{
            nodeId: "51ead864-30d8-4737-a489-40411145b1a9",
            displayName: "联邦学习",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/联邦学习.png",
            children: [],
            items: [{
                itemId: "ae07ad10-e7f8-474d-8677-e4becb7bd122",
                displayName: "TensorFlow Federated",
                description: "一个用于联邦学习的 TensorFlow 扩展",
                logoPath: envConfig.baseUrl + "img/menu/TensorFlowFederated.png",
                websiteUrl: "https://www.tensorflow.org/federated",
                redirectType: "DETAIL"
            }, {
                itemId: "0c9bfe6c-75fb-4dde-a651-c8a0aa6bb074",
                displayName: "PySyft",
                description: "用于隐私保护的深度学习框架",
                logoPath: envConfig.baseUrl + "img/menu/PySyft.png",
                websiteUrl: "https://github.com/OpenMined/PySyft",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "79bcf498-cd26-4ccb-a36e-bfeb857016ba",
            displayName: "分布式计算",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/分布式计算.png",
            children: [],
            items: [{
                itemId: "6c9e4af1-28d5-4fe2-97c2-3e2edddf3e82",
                displayName: "Horovod",
                description: "一个分布式深度学习训练框架，支持多种框架的分布式训练",
                logoPath: envConfig.baseUrl + "img/menu/Horovod.png",
                websiteUrl: "https://horovod.readthedocs.io",
                redirectType: "DETAIL"
            }, {
                itemId: "83a4f191-78b2-4589-a588-4a978bf806b4",
                displayName: "Ray",
                description: "用于大规模分布式计算和并行计算的库",
                logoPath: envConfig.baseUrl + "img/menu/Ray.png",
                websiteUrl: "https://www.ray.io",
                redirectType: "DETAIL"
            }, {
                itemId: "a90d64a7-8659-4aa7-96fb-35bf8cec8dd9",
                displayName: "DeepSpeed",
                description: "一个用于加速大规模深度学习训练的开源库",
                logoPath: envConfig.baseUrl + "img/menu/DeepSpeed.png",
                websiteUrl: "https://www.deepspeed.ai",
                redirectType: "DETAIL"
            }]
        }, {
            nodeId: "f44d232b-6006-4d47-bf2c-c7f231ad2e54",
            displayName: "对抗学习与防御",
            nodeType: "MENU",
            iconPath: envConfig.baseUrl + "img/menu/对抗学习与防御.png",
            children: [],
            items: [{
                itemId: "1ea58e6c-6081-4617-9b7a-df86ca9f34be",
                displayName: "Adversarial Robustness Toolbox ",
                description: "一个用于测试和增强机器学习模型对抗鲁棒性的工具包",
                logoPath: envConfig.baseUrl + "img/menu/AdversarialRobustnessToolbox.png",
                websiteUrl: "https://github.com/Trusted-AI/adversarial-robustness-toolbox",
                redirectType: "DETAIL"
            }, {
                itemId: "314e77bf-42fc-4c6d-937b-e1d665ec3ca4",
                displayName: "CleverHans",
                description: "一个用于对抗机器学习模型进行攻击和防御测试的库",
                logoPath: envConfig.baseUrl + "img/menu/CleverHans.png",
                websiteUrl: "https://github.com/cleverhans-lab/cleverhans",
                redirectType: "DETAIL"
            }]
        }],
        items: []
    }];

/** 菜单类型  */
export interface MenuType {
    /** 类型key */
    key: string;
    /** 类型名称 */
    label: string;
    /** 禁用 */
    disabled?: boolean;
    /** 是否默认 */
    default?: boolean;
    /** 菜单节点 */
    menu: MenuNode[];
}

/** 菜单类型列表 */
export const menus: MenuType[] = [{
    key: '1',
    label: '通用学科',
    disabled: false,
    default: true,
    menu: commonMenuNodes
}, {
    key: '2',
    label: '计算机科学',
    disabled: false,
    default: false,
    menu: computerMenuNodes
}];

/** 根据菜单类型获取菜单节点 */
export function getMenuNodesByType(type: string): MenuNode[] {
    return menus.find(item => item.key === type)?.menu || [];
}

/** 获取默认菜单类型 */
export function getDefaultMenuType(): MenuType {
    return menus.find(item => item.default) || menus[0] as MenuType;
}