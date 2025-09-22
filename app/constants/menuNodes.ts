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
    redirectType: "DETAIL"
}

/** 菜单节点列表 */
const menuNodes: MenuNode[] = [
    {
        nodeId: "1e3f7e1d-3c37-11f0-ba03-bc24117649c5",
        displayName: "鱼丸推荐",
        nodeType: "MENU",
        iconPath: "line-md:thumbs-up",
        children: [],
        items: [
            {
                itemId: "f86eec59-685e-4840-a22f-7fa0b3191391",
                displayName: "中国知网（CNKI）",
                description: "中国最大的学术论文数据库",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/4e742eed5e754c85bc8ba1e8194f4727.%E4%B8%AD%E5%9B%BD%E7%9F%A5%E7%BD%91%EF%BC%88CNKI%EF%BC%89.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=bh5apvu7Kef%2FK2BlzfR9eaVHmBA%3D",
                websiteUrl: "https://www.cnki.net/",
                redirectType: "DETAIL"
            },
            {
                itemId: "63939833-32e0-489a-811a-cf10791346a5",
                displayName: "维普中文期刊",
                description: "工程技术文献占优、支持同义词扩展检索",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/7ed71df8fa864f9e85948a10dbe35045.%E7%BB%B4%E6%99%AE%E4%B8%AD%E6%96%87%E6%9C%9F%E5%88%8A.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=lxqqGyA3KmWurPIih%2BNZz5VfMog%3D",
                websiteUrl: "https://qikan.cqvip.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "ae45741a-a0fa-4932-9372-bbdb61750513",
                displayName: "国家科技图书文献中心（NSTL）",
                description: "集成中科院、工程院等资源",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/7ab6f284282447c7885bfe2ba9a0f4db.%E5%9B%BD%E5%AE%B6%E7%A7%91%E6%8A%80%E5%9B%BE%E4%B9%A6%E6%96%87%E7%8C%AE%E4%B8%AD%E5%BF%83%EF%BC%88NSTL%EF%BC%89.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=R%2FAgr6BwnTr7%2FKJNccwdKir%2FLPo%3D",
                websiteUrl: "https://www.nstl.gov.cn",
                redirectType: "DETAIL"
            },
            {
                itemId: "d23b1130-4883-435a-91fd-163c675089d4",
                displayName: "Web of Science",
                description: "获取自然科学领域最权威、最前沿的科研信息",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/c31bd0f824224d18b8d080be9b68bc9c.Web%20of%20Science.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=b5IC4N%2FovRvHU9g8o2pwImih%2BLo%3D",
                websiteUrl: "https://www.webofscience.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "076c4c13-a5d5-488e-9f9d-4f0586049006",
                displayName: "NoteExpress",
                description: "论文写作时的参考文献管理",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/bd6a2903f34f4fec89cd42c64a8b6bdc.noteexpress.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=ri3R8ri61s44%2BShqNfpENNib3yA%3D",
                websiteUrl: "https://jc.inoteexpress.com/dynamo/index.html",
                redirectType: "DETAIL"
            },
            {
                itemId: "2941135d-4e52-4408-8293-fd1060f8f3a9",
                displayName: "学信网查重",
                description: "权威，本科 / 硕博适用",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/d2304d74ada14e988f3713aeb59ffb4c.%E5%AD%A6%E4%BF%A1%E7%BD%91%E6%9F%A5%E9%87%8D.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2B8XarURul5DBskx3rwcvhNrlIMc%3D",
                websiteUrl: "https://chsi.wanfangtech.net",
                redirectType: "DETAIL"
            },
            {
                itemId: "7135ffe4-3be2-4d67-8251-f8af0b773ed5",
                displayName: "ScienceDirect",
                description: "是全球最大的科学、技术与医学全文电子资源数据库",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/52da7c106a8a457e83d1e6d4098c5c0c.sciencedirect.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Kh95EjY49ongpnR56DgjhLOMgiI%3D",
                websiteUrl: "https://www.sciencedirect.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "b6217b2c-edaa-4678-8e86-00ba7dd547f3",
                displayName: "arXiv",
                description: "全球最大的预印本平台之一，及时了解这些领域的最新研究动态和成果",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/8ce573302fce48c59f115db0d64e522c.arxiv.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=eb58TXSG5MsOYslC7BQu6rnkxhQ%3D",
                websiteUrl: "http://arxiv.org/",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "126d7780-3c77-11f0-9b5b-bc24117649c5",
        displayName: "中文文献",
        nodeType: "MENU",
        iconPath: "line-md:text-box-multiple",
        children: [
            {
                nodeId: "ca4937d2-57d9-4a06-a778-ba1c33098587",
                displayName: "自然科学",
                nodeType: "MENU",
                iconPath: null,
                children: [],
                items: [
                    {
                        itemId: "e6ffeebd-3c3c-11f0-ba03-bc24117649c5",
                        displayName: "中国知网（CNKI）",
                        description: "中国最大的学术论文数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E7%9F%A5%E7%BD%91%EF%BC%88CNKI%EF%BC%89.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=a1OqYqN6qQEgK7NNiYe122L7aPo%3D",
                        websiteUrl: "https://www.cnki.net/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "41d38591-3d20-11f0-9b5b-bc24117649c5",
                        displayName: "国家科技图书文献中心（NSTL）",
                        description: "集成中科院、工程院等资源",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%9B%BD%E5%AE%B6%E7%A7%91%E6%8A%80%E5%9B%BE%E4%B9%A6%E6%96%87%E7%8C%AE%E4%B8%AD%E5%BF%83%EF%BC%88NSTL%EF%BC%89.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=OMGTPwtFqbMaA6h4uY6oK7GIfh4%3D",
                        websiteUrl: "https://www.nstl.gov.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "8143e503-8077-42dd-8ebe-71b1bc9cf41b",
                        displayName: "维普中文期刊",
                        description: "工程技术文献占优、支持同义词扩展检索",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%BB%B4%E6%99%AE%E4%B8%AD%E6%96%87%E6%9C%9F%E5%88%8A.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=bcCxLWxTpxjY6TljGFAFy1nhm6k%3D",
                        websiteUrl: "https://qikan.cqvip.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "524c18b0-e19e-42e5-a59a-caca6fde3dcd",
                        displayName: "国家科技图书文献中心（NSTL）",
                        description: "集成中科院、工程院等资源",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%9B%BD%E5%AE%B6%E7%A7%91%E6%8A%80%E5%9B%BE%E4%B9%A6%E6%96%87%E7%8C%AE%E4%B8%AD%E5%BF%83%EF%BC%88NSTL%EF%BC%89.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=OMGTPwtFqbMaA6h4uY6oK7GIfh4%3D",
                        websiteUrl: "https://www.nstl.gov.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "7ae3d556-5159-4944-b9bb-ff0c6a279b2f",
                        displayName: "中国科学引文数据库（CSCD）",
                        description: "我国第一个引文数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E5%BC%95%E6%96%87%E6%95%B0%E6%8D%AE%E5%BA%93%EF%BC%88CSCD%EF%BC%89.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=6hmXNjjjTLQ6opTu4aL%2FYO5%2F8V0%3D",
                        websiteUrl: "http://sciencechina.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "4a914924-d878-4936-a5cb-7cc7e43a70ac",
                        displayName: "中国生物医学文献服务系统",
                        description: "生物医学中外文整合检索平台",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E7%94%9F%E7%89%A9%E5%8C%BB%E5%AD%A6%E6%96%87%E7%8C%AE%E6%9C%8D%E5%8A%A1%E7%B3%BB%E7%BB%9F.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=eP9QiNCnuCuxsC8uuTud3Ql5uAY%3D",
                        websiteUrl: "https://www.sinomed.ac.cn/index.jsp",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "45e9a6db-efa1-4fc7-861a-a8dae487cc75",
                        displayName: "国家自然科学基金知识库",
                        description: "获取中文前沿研究数据（材料/环境科学/化学为主）",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%9B%BD%E5%AE%B6%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%A6%E5%9F%BA%E9%87%91%E7%9F%A5%E8%AF%86%E5%BA%93.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=vgDfEwtDdAK1UW2HosDTl2tE4dg%3D",
                        websiteUrl: "https://kd.nsfc.cn/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "b2156a81-be3f-4ec1-81c1-7df1d58865e4",
                        displayName: "超星期刊",
                        description: "全终端智能化学术期刊库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E8%B6%85%E6%98%9F%E6%9C%9F%E5%88%8A.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=MamTU0dr1QaVcW2BcWQOWQIjFOg%3D",
                        websiteUrl: "https://www.chaoxing.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "c47ed9ae-ec95-4290-86bf-0aa308942742",
                        displayName: "中华医学期刊",
                        description: "中华医学会权威综合性医学期刊",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%8D%8E%E5%8C%BB%E5%AD%A6%E6%9C%9F%E5%88%8A%E7%BD%91.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=gCdjg8SO8PfvDwgOfHbqhKc8Mt4%3D",
                        websiteUrl: "https://www.yiigle.com/index",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "e429664d-4bde-47a9-a294-76d3834c09dc",
                        displayName: "中国国家数字图书馆",
                        description: "国家级数字阅读资源中心",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%95%B0%E5%AD%97%E5%9B%BE%E4%B9%A6%E9%A6%86.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=NMnyn5ZRsa8Ckru7Z9V4MhcQPpE%3D",
                        websiteUrl: "https://www.nlc.cn/web/index.shtml",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "b198590c-67e4-45f6-8298-f7ff72b95b9d",
                        displayName: "万方数据库",
                        description: "综合性强、数据更新快",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%87%E6%96%B9.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=E71ow4taLjJdjV4P2x%2B%2Bw8Z3i68%3D",
                        websiteUrl: "https://www.wanfangdata.com.cn/",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "96b2b199-aae4-4b5c-97a4-e7323f2cd5c6",
                displayName: "交叉学科",
                nodeType: "MENU",
                iconPath: null,
                children: [],
                items: [
                    {
                        itemId: "e69feebd-3c3c-11f0-ba03-bc24117649c5",
                        displayName: "中国知网（CNKI）",
                        description: "中国最大的学术论文数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E7%9F%A5%E7%BD%91%EF%BC%88CNKI%EF%BC%89.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=a1OqYqN6qQEgK7NNiYe122L7aPo%3D",
                        websiteUrl: "https://www.cnki.net/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "8343e503-8077-42dd-8ebe-71b1bc9cf41b",
                        displayName: "维普中文期刊",
                        description: "工程技术文献占优、支持同义词扩展检索",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%BB%B4%E6%99%AE%E4%B8%AD%E6%96%87%E6%9C%9F%E5%88%8A.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=bcCxLWxTpxjY6TljGFAFy1nhm6k%3D",
                        websiteUrl: "https://qikan.cqvip.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "7ae4d556-5159-4944-b9bb-ff0c6a279b2f",
                        displayName: "中国科学引文数据库（CSCD）",
                        description: "我国第一个引文数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E5%BC%95%E6%96%87%E6%95%B0%E6%8D%AE%E5%BA%93%EF%BC%88CSCD%EF%BC%89.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=6hmXNjjjTLQ6opTu4aL%2FYO5%2F8V0%3D",
                        websiteUrl: "http://sciencechina.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "d28a69c8-e5df-47d7-bdd6-89aa4e1539f9",
                        displayName: "寻知学术文献数据检索平台",
                        description: "方便、快捷地发现所需的交叉学科知识和文献情报信息",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%AF%BB%E7%9F%A5%E5%AD%A6%E6%9C%AF%E6%96%87%E7%8C%AE%E6%95%B0%E6%8D%AE%E6%A3%80%E7%B4%A2%E5%B9%B3%E5%8F%B0.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=E68FJGMNJhAx0hHNa3zkYNRbfZk%3D",
                        websiteUrl: "https://xunzhi.kingbooks.com.cn/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "b598590c-67e4-45f6-8298-f7ff72b95b9d",
                        displayName: "万方数据库",
                        description: "综合性强、数据更新快",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%87%E6%96%B9.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=E71ow4taLjJdjV4P2x%2B%2Bw8Z3i68%3D",
                        websiteUrl: "https://www.wanfangdata.com.cn/",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "86aa9faf-4500-498e-afa1-edea58a9a873",
                displayName: "人文科学",
                nodeType: "MENU",
                iconPath: null,
                children: [],
                items: [
                    {
                        itemId: "e68feebd-3c3c-11f0-ba03-bc24117649c5",
                        displayName: "中国知网（CNKI）",
                        description: "中国最大的学术论文数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E7%9F%A5%E7%BD%91%EF%BC%88CNKI%EF%BC%89.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=a1OqYqN6qQEgK7NNiYe122L7aPo%3D",
                        websiteUrl: "https://www.cnki.net/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "46d894d5-369b-4db6-82f3-006d340828c7",
                        displayName: "中文社会科学引文索引（CSSCI）",
                        description: "检索中文人文社会科学领域论文收录和被引用情况的引文数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E6%96%87%E7%A4%BE%E4%BC%9A%E7%A7%91%E5%AD%A6%E5%BC%95%E6%96%87%E7%B4%A2%E5%BC%95.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=eIaMmd3xXoAj93e%2Fgpd6IoF2en4%3D",
                        websiteUrl: "http://cssci.nju.edu.cn/login_u.html",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "66be8e23-3d9a-4c56-a0dc-ef9de43a41ae",
                        displayName: "读秀学术搜索",
                        description: "海量全文数据及元数据组成的超大型数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E8%AF%BB%E7%A7%80%E5%AD%A6%E6%9C%AF%E6%90%9C%E7%B4%A2.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=qrkBw0grKffIP4Zfrc0EPjlh7BM%3D",
                        websiteUrl: "https://www.duxiu.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "b498590c-67e4-45f6-8298-f7ff72b95b9d",
                        displayName: "万方数据库",
                        description: "综合性强、数据更新快",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%87%E6%96%B9.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=E71ow4taLjJdjV4P2x%2B%2Bw8Z3i68%3D",
                        websiteUrl: "https://www.wanfangdata.com.cn/",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "5a18568d-75b1-45dc-a8fe-4cef1617b102",
                displayName: "社会科学",
                nodeType: "MENU",
                iconPath: null,
                children: [],
                items: [
                    {
                        itemId: "e67feebd-3c3c-11f0-ba03-bc24117649c5",
                        displayName: "中国知网（CNKI）",
                        description: "中国最大的学术论文数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E7%9F%A5%E7%BD%91%EF%BC%88CNKI%EF%BC%89.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=a1OqYqN6qQEgK7NNiYe122L7aPo%3D",
                        websiteUrl: "https://www.cnki.net/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "45d894d5-369b-4db6-82f3-006d340828c7",
                        displayName: "中文社会科学引文索引（CSSCI）",
                        description: "检索中文人文社会科学领域论文收录和被引用情况的引文数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E6%96%87%E7%A4%BE%E4%BC%9A%E7%A7%91%E5%AD%A6%E5%BC%95%E6%96%87%E7%B4%A2%E5%BC%95.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=eIaMmd3xXoAj93e%2Fgpd6IoF2en4%3D",
                        websiteUrl: "http://cssci.nju.edu.cn/login_u.html",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "2bf93263-690e-495c-9a0f-a5dd6fbb5cd9",
                        displayName: "国家哲学社会科学文献中心 (NSSD)",
                        description: "免费开放，覆盖哲学、经济学、法学等8大学科",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%9B%BD%E5%AE%B6%E5%93%B2%E5%AD%A6%E7%A4%BE%E4%BC%9A%E7%A7%91%E5%AD%A6%E6%96%87%E7%8C%AE%E4%B8%AD%E5%BF%83.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=GH7ZJFeJyTFzgaVO1c82DPcmEuQ%3D",
                        websiteUrl: "https://www.ncpssd.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "8f735e4d-a09a-4008-9cb4-ca0f734c0850",
                        displayName: "人大复印报刊资料",
                        description: "国内公开出版的人文社会科学领域的重要报刊文章",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%BA%BA%E5%A4%A7%E5%A4%8D%E5%8D%B0%E6%8A%A5%E5%88%8A%E8%B5%84%E6%96%99.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=LoDF2FCanwY1ROG8IX6r73AYEUA%3D",
                        websiteUrl: "http://www.rdfybk.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "e520ca0b-406e-46f7-a932-968013909b11",
                        displayName: "中国心理科学信息中心",
                        description: "中国心理学研究成果专著",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%8D%8E%E5%BF%83%E7%90%86%E7%A7%91%E5%AD%A6%E4%BF%A1%E6%81%AF%E4%B8%AD%E5%BF%83.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=7InHAghxcDIINXjncXJNok0DqXY%3D",
                        websiteUrl: "https://lib.psych.ac.cn/library/home/index",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "b398590c-67e4-45f6-8298-f7ff72b95b9d",
                        displayName: "万方数据库",
                        description: "综合性强、数据更新快",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%87%E6%96%B9.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=E71ow4taLjJdjV4P2x%2B%2Bw8Z3i68%3D",
                        websiteUrl: "https://www.wanfangdata.com.cn/",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "3168f446-587b-4f0a-a14a-956b6e3ed831",
                displayName: "工程技术",
                nodeType: "MENU",
                iconPath: null,
                children: [],
                items: [
                    {
                        itemId: "e66feebd-3c3c-11f0-ba03-bc24117649c5",
                        displayName: "中国知网（CNKI）",
                        description: "中国最大的学术论文数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E7%9F%A5%E7%BD%91%EF%BC%88CNKI%EF%BC%89.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=a1OqYqN6qQEgK7NNiYe122L7aPo%3D",
                        websiteUrl: "https://www.cnki.net/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "8243e503-8077-42dd-8ebe-71b1bc9cf41b",
                        displayName: "维普中文期刊",
                        description: "工程技术文献占优、支持同义词扩展检索",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%BB%B4%E6%99%AE%E4%B8%AD%E6%96%87%E6%9C%9F%E5%88%8A.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=bcCxLWxTpxjY6TljGFAFy1nhm6k%3D",
                        websiteUrl: "https://qikan.cqvip.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "534c18b0-e19e-42e5-a59a-caca6fde3dcd",
                        displayName: "国家科技图书文献中心（NSTL）",
                        description: "集成中科院、工程院等资源",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%9B%BD%E5%AE%B6%E7%A7%91%E6%8A%80%E5%9B%BE%E4%B9%A6%E6%96%87%E7%8C%AE%E4%B8%AD%E5%BF%83%EF%BC%88NSTL%EF%BC%89.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=OMGTPwtFqbMaA6h4uY6oK7GIfh4%3D",
                        websiteUrl: "https://www.nstl.gov.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "b298590c-67e4-45f6-8298-f7ff72b95b9d",
                        displayName: "万方数据库",
                        description: "综合性强、数据更新快",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%87%E6%96%B9.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=E71ow4taLjJdjV4P2x%2B%2Bw8Z3i68%3D",
                        websiteUrl: "https://www.wanfangdata.com.cn/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "d43b9d17-086c-4652-bea1-bbf12aafb4f1",
                        displayName: "Semantic Scholar ",
                        description: "覆盖AI/系统领域研究趋势分析、关联文献挖掘",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/f877bd04c78145b38277b5d8cef22447.Semantic%20Scholar.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=mzKVSpbRv6%2FjihJJBiQkJrXYDF0%3D",
                        websiteUrl: "https://www.semanticscholar.org",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: [
            {
                itemId: "ba98590c-67e4-45f6-8298-f7ff72b95b9d",
                displayName: "万方数据库",
                description: "综合性强、数据更新快",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%87%E6%96%B9.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=E71ow4taLjJdjV4P2x%2B%2Bw8Z3i68%3D",
                websiteUrl: "https://www.wanfangdata.com.cn/",
                redirectType: "DETAIL"
            },
            {
                itemId: "8043e503-8077-42dd-8ebe-71b1bc9cf41b",
                displayName: "维普中文期刊",
                description: "工程技术文献占优、支持同义词扩展检索",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%BB%B4%E6%99%AE%E4%B8%AD%E6%96%87%E6%9C%9F%E5%88%8A.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=bcCxLWxTpxjY6TljGFAFy1nhm6k%3D",
                websiteUrl: "https://qikan.cqvip.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "514c18b0-e19e-42e5-a59a-caca6fde3dcd",
                displayName: "国家科技图书文献中心（NSTL）",
                description: "集成中科院、工程院等资源",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%9B%BD%E5%AE%B6%E7%A7%91%E6%8A%80%E5%9B%BE%E4%B9%A6%E6%96%87%E7%8C%AE%E4%B8%AD%E5%BF%83%EF%BC%88NSTL%EF%BC%89.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=OMGTPwtFqbMaA6h4uY6oK7GIfh4%3D",
                websiteUrl: "https://www.nstl.gov.cn",
                redirectType: "DETAIL"
            },
            {
                itemId: "d4b344d0-34da-434a-93e3-6899cdc5deb7",
                displayName: "中国知网（CNKI）",
                description: "中国最大的学术论文数据库",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E7%9F%A5%E7%BD%91%EF%BC%88CNKI%EF%BC%89.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=a1OqYqN6qQEgK7NNiYe122L7aPo%3D",
                websiteUrl: "https://www.cnki.net/",
                redirectType: "DETAIL"
            },
            {
                itemId: "44e9a6db-efa1-4fc7-861a-a8dae487cc75",
                displayName: "国家自然科学基金知识库",
                description: "获取中文前沿研究数据（材料/环境科学/化学为主）",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%9B%BD%E5%AE%B6%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%A6%E5%9F%BA%E9%87%91%E7%9F%A5%E8%AF%86%E5%BA%93.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=vgDfEwtDdAK1UW2HosDTl2tE4dg%3D",
                websiteUrl: "https://kd.nsfc.cn/",
                redirectType: "DETAIL"
            },
            {
                itemId: "7ae2d556-5159-4944-b9bb-ff0c6a279b2f",
                displayName: "中国科学引文数据库（CSCD）",
                description: "我国第一个引文数据库",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E5%BC%95%E6%96%87%E6%95%B0%E6%8D%AE%E5%BA%93%EF%BC%88CSCD%EF%BC%89.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=6hmXNjjjTLQ6opTu4aL%2FYO5%2F8V0%3D",
                websiteUrl: "http://sciencechina.cn",
                redirectType: "DETAIL"
            },
            {
                itemId: "3a914924-d878-4936-a5cb-7cc7e43a70ac",
                displayName: "中国生物医学文献服务系统",
                description: "生物医学中外文整合检索平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E7%94%9F%E7%89%A9%E5%8C%BB%E5%AD%A6%E6%96%87%E7%8C%AE%E6%9C%8D%E5%8A%A1%E7%B3%BB%E7%BB%9F.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=eP9QiNCnuCuxsC8uuTud3Ql5uAY%3D",
                websiteUrl: "https://www.sinomed.ac.cn/index.jsp",
                redirectType: "DETAIL"
            },
            {
                itemId: "b2056a81-be3f-4ec1-81c1-7df1d58865e4",
                displayName: "超星期刊",
                description: "全终端智能化学术期刊库",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E8%B6%85%E6%98%9F%E6%9C%9F%E5%88%8A.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=MamTU0dr1QaVcW2BcWQOWQIjFOg%3D",
                websiteUrl: "https://www.chaoxing.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "c37ed9ae-ec95-4290-86bf-0aa308942742",
                displayName: "中华医学期刊",
                description: "中华医学会权威综合性医学期刊",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%8D%8E%E5%8C%BB%E5%AD%A6%E6%9C%9F%E5%88%8A%E7%BD%91.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=gCdjg8SO8PfvDwgOfHbqhKc8Mt4%3D",
                websiteUrl: "https://www.yiigle.com/index",
                redirectType: "DETAIL"
            },
            {
                itemId: "e419664d-4bde-47a9-a294-76d3834c09dc",
                displayName: "中国国家数字图书馆",
                description: "国家级数字阅读资源中心",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%95%B0%E5%AD%97%E5%9B%BE%E4%B9%A6%E9%A6%86.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=NMnyn5ZRsa8Ckru7Z9V4MhcQPpE%3D",
                websiteUrl: "https://www.nlc.cn/web/index.shtml",
                redirectType: "DETAIL"
            },
            {
                itemId: "e510ca0b-406e-46f7-a932-968013909b11",
                displayName: "中国心理科学信息中心",
                description: "中国心理学研究成果专著",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%8D%8E%E5%BF%83%E7%90%86%E7%A7%91%E5%AD%A6%E4%BF%A1%E6%81%AF%E4%B8%AD%E5%BF%83.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=7InHAghxcDIINXjncXJNok0DqXY%3D",
                websiteUrl: "https://lib.psych.ac.cn/library/home/index",
                redirectType: "DETAIL"
            },
            {
                itemId: "44d894d5-369b-4db6-82f3-006d340828c7",
                displayName: "中文社会科学引文索引（CSSCI）",
                description: "检索中文人文社会科学领域论文收录和被引用情况的引文数据库",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E6%96%87%E7%A4%BE%E4%BC%9A%E7%A7%91%E5%AD%A6%E5%BC%95%E6%96%87%E7%B4%A2%E5%BC%95.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=eIaMmd3xXoAj93e%2Fgpd6IoF2en4%3D",
                websiteUrl: "http://cssci.nju.edu.cn/login_u.html",
                redirectType: "DETAIL"
            },
            {
                itemId: "8f725e4d-a09a-4008-9cb4-ca0f734c0850",
                displayName: "人大复印报刊资料",
                description: "国内公开出版的人文社会科学领域的重要报刊文章",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%BA%BA%E5%A4%A7%E5%A4%8D%E5%8D%B0%E6%8A%A5%E5%88%8A%E8%B5%84%E6%96%99.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=LoDF2FCanwY1ROG8IX6r73AYEUA%3D",
                websiteUrl: "http://www.rdfybk.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "1bf93263-690e-495c-9a0f-a5dd6fbb5cd9",
                displayName: "国家哲学社会科学文献中心 (NSSD)",
                description: "免费开放，覆盖哲学、经济学、法学等8大学科",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%9B%BD%E5%AE%B6%E5%93%B2%E5%AD%A6%E7%A4%BE%E4%BC%9A%E7%A7%91%E5%AD%A6%E6%96%87%E7%8C%AE%E4%B8%AD%E5%BF%83.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=GH7ZJFeJyTFzgaVO1c82DPcmEuQ%3D",
                websiteUrl: "https://www.ncpssd.org",
                redirectType: "DETAIL"
            },
            {
                itemId: "65be8e23-3d9a-4c56-a0dc-ef9de43a41ae",
                displayName: "读秀学术搜索",
                description: "海量全文数据及元数据组成的超大型数据库",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E8%AF%BB%E7%A7%80%E5%AD%A6%E6%9C%AF%E6%90%9C%E7%B4%A2.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=qrkBw0grKffIP4Zfrc0EPjlh7BM%3D",
                websiteUrl: "https://www.duxiu.com/",
                redirectType: "DETAIL"
            },
            {
                itemId: "d27a69c8-e5df-47d7-bdd6-89aa4e1539f9",
                displayName: "寻知学术文献数据检索平台",
                description: "方便、快捷地发现所需的交叉学科知识和文献情报信息",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%AF%BB%E7%9F%A5%E5%AD%A6%E6%9C%AF%E6%96%87%E7%8C%AE%E6%95%B0%E6%8D%AE%E6%A3%80%E7%B4%A2%E5%B9%B3%E5%8F%B0.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=E68FJGMNJhAx0hHNa3zkYNRbfZk%3D",
                websiteUrl: "https://xunzhi.kingbooks.com.cn/",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "1300200a-3c77-11f0-9b5b-bc24117649c5",
        displayName: "英文文献",
        nodeType: "MENU",
        iconPath: "line-md:text-box-multiple-twotone",
        children: [
            {
                nodeId: "cbe8a570-19c5-469d-94d7-07637d310884",
                displayName: "交叉学科",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/42627c8912b245e0864e053f27560d51.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=u62oUrn39PJmyc8wjN18wmIK5Gs%3D",
                children: [],
                items: [
                    {
                        itemId: "58eb1c54-fbb4-445f-9917-e1c83d9519ff",
                        displayName: "Web of Science",
                        description: "获取自然科学领域最权威、最前沿的科研信息",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/4634876cb62949d69ebff72b47cdd11b.web-of-science.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=SW%2BMB5Lk0vV10zhpdBaHFDJcDTk%3D",
                        websiteUrl: "https://www.webofscience.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "6d4035e8-3913-4893-ba25-ee143658c767",
                        displayName: "Scopus",
                        description: "全球最大的同行评议学术论文摘要和引文数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/bbef0bbd2e16423f82abb0b38c92756d.scopus.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=fiMH6Acy011NaMago31DlXBiSGk%3D",
                        websiteUrl: "https://www.scopus.com/home.uri",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "da020e45-377f-4a71-ad38-2568b372e89a",
                        displayName: "ScienceDirect",
                        description: "是全球最大的科学、技术与医学全文电子资源数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/533364142cc64fd885d6de473a37ae0d.sciencedirect.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=gwcodxv0nu6nwmTlsho5nkp8RLc%3D",
                        websiteUrl: "https://www.sciencedirect.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "bee96b6a-7b06-4c98-9bd8-67a939977384",
                        displayName: "ProQuest",
                        description: "收录欧美多国大学的硕博士论文，支持跨学科检索",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/e6729a29b3214c36980503772bb49557.proquest.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=fUpi6rXAWQJGHT7NbbaZpE2%2FTso%3D",
                        websiteUrl: "https://about.proquest.com/zh/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "2211871e-08ab-4aa2-9ab3-3024b1bcdfec",
                        displayName: "BASE",
                        description: "提供对全球异构学术资源的集成检索服务",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/BASE.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=kNoU%2BE%2F7pOdmpIWwtl%2Btv7qkT1s%3D",
                        websiteUrl: "http://www.base-search.net/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "c06c19c2-e407-4b27-91ae-3f90e3462dfc",
                        displayName: "Sage Research Methods",
                        description: "适合跨学科方法设计 | 方法学整合",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Sage%20Research%20Methods.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2FDSJfdo0wjzeCgV%2Bwltc9dxpnf4%3D",
                        websiteUrl: "https://methods.sagepub.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "e8250d46-41da-48cd-a505-248d278c3304",
                        displayName: "EBSCO",
                        description: "多学科学术数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/EBSCO.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2Bj0TUgVIZZ1DH3n6jQU5CmdxFrY%3D",
                        websiteUrl: "http://search.ebscohost.com",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "cbe8a570-19c5-469d-94d7-07637d310883",
                displayName: "人文科学",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/42627c8912b245e0864e053f27560d51.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=u62oUrn39PJmyc8wjN18wmIK5Gs%3D",
                children: [],
                items: [
                    {
                        itemId: "72ac02f4-ae58-4ac7-a133-95cd603c835d",
                        displayName: "Web of Science",
                        description: "获取自然科学领域最权威、最前沿的科研信息",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/b81aa140465c405d8274595850aa62a5.web-of-science.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=E07ol1BSh8xP0SJ4WMCQ2fhxu8g%3D",
                        websiteUrl: "https://www.webofscience.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "68205fe9-f4f3-49f1-82a1-944e8754a4c4",
                        displayName: "Project MUSE",
                        description: "人文科学研究的重要资源之一",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/dd24b2a0d5a94cfd9f3ecd3f78521fd5.Project%20MUSE.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=hoF%2B27SiHz53Xs4b%2BmVtRSCwy90%3D",
                        websiteUrl: "https://about.muse.jhu.edu/librarians/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "e42589c5-310a-43b1-bc5a-93bfea9d29c3",
                        displayName: "JSTOR",
                        description: "涵盖人文、社会科学和自然科学领域的期刊文献",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/JSTOR.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=aZxY909HL7lb%2BZ8eOCrdapl1eO4%3D",
                        websiteUrl: "https://www.jstor.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "2f7d1b4e-e618-4757-bad5-f66b2e7e18c4",
                        displayName: "HeinOnline",
                        description: "全球最大法律文献库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/afd0cc76a8a44acfbdf7b8271b06b8c7.HeinOnline.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=NxgEBiLdW26BbQlDPun2vIuuYfg%3D",
                        websiteUrl: "https://home.heinonline.org/",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "cbe8a570-19c5-469d-94d7-07637d310882",
                displayName: "社会科学",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/42627c8912b245e0864e053f27560d51.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=u62oUrn39PJmyc8wjN18wmIK5Gs%3D",
                children: [],
                items: [
                    {
                        itemId: "28fba66a-b3d0-433d-8faa-a0754bba7cbd",
                        displayName: "Web of Science",
                        description: "获取自然科学领域最权威、最前沿的科研信息",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/d1f4e8c5a7674ca497f255ce575ba14d.web-of-science.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=ie5IAZsVy0097qMlHHz%2BDZYCriA%3D",
                        websiteUrl: "https://www.webofscience.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "44534b02-567c-4595-bdd9-17287517dbe2",
                        displayName: "JSTOR",
                        description: "涵盖人文、社会科学和自然科学领域的期刊文献",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/a5a8ada724e84f38b8c18509e70a7d2d.JSTOR.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=6QbkaKUczXsHP6V3aSVtJy7bDlo%3D",
                        websiteUrl: "https://www.jstor.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "df1cf674-ea55-4d1a-9398-c6751f62f9e2",
                        displayName: "ProQuest",
                        description: "收录欧美多国大学的硕博士论文，支持跨学科检索",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/3aa1d3d28e654ca08cd1bd69d57439d3.proquest.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=FONiFL9mXezvuULwj3cB8zwi3bs%3D",
                        websiteUrl: "https://about.proquest.com/zh/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "93be835c-2ec8-4e9c-83d4-de7ccd924552",
                        displayName: "Wiley Online Library",
                        description: "全球领先的学协会出版商",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/b0c41d8c8504417a95d76020108cd508.Wiley%20Online%20Library.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=uKir59mxQD8fXBlZQ9YUTUyNZfs%3D",
                        websiteUrl: "https://onlinelibrary.wiley.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "2626f2b2-245f-46c7-b104-9b2af5d63c42",
                        displayName: "Cambridge Journals Online",
                        description: "剑桥大学出版社的期刊在线平台",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/9d274077599b45a6883149a14c9562bf.Cambridge%20Journals%20Online.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=zaM8YiV9ZVG5iyK8occugxvqLUI%3D",
                        websiteUrl: "https://www.cambridge.org/core",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "ec02b02a-927f-4d41-bb89-e6f4de0681d3",
                        displayName: "SSRN",
                        description: "济学、法学预印本平台，可免费下载工作论文",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/46512ffd41b742c0afc8061ffca9c37a.ssrn.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=TT8GUrnbwwoEpM9I7Ob71LZLKSY%3D",
                        websiteUrl: "https://www.ssrn.com/index.cfm/en/",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "cbe8a570-19c5-469d-94d7-07637d310881",
                displayName: "工程技术",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/42627c8912b245e0864e053f27560d51.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=u62oUrn39PJmyc8wjN18wmIK5Gs%3D",
                children: [],
                items: [
                    {
                        itemId: "c3ded221-b663-44fd-9836-032cb7d7cf15",
                        displayName: "IEEE Xplore",
                        description: "电气电子工程、计算机科学等领域的权威文献数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/IEEE%20Xplore.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=8ifcE6efmH8ol1K8CpxAqdITB%2BM%3D",
                        websiteUrl: "https://developer.ieee.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "256988a7-523b-4972-b7e5-f5f801975524",
                        displayName: "ScienceDirect",
                        description: "是全球最大的科学、技术与医学全文电子资源数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/sciencedirect.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=TBd9DT8hYW2ZuhnLIfwLEcwHPLo%3D",
                        websiteUrl: "https://www.sciencedirect.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "07154ed7-0010-4901-887e-29cc8ffde4b4",
                        displayName: "ASME Digital Library",
                        description: "美国机械工程师学会资源",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/ASME%20Digital%20Library.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=EGPhiDxlBE3o8lH6XapU8MDQNw8%3D",
                        websiteUrl: "https://asmedigitalcollection.asme.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "9dedd8b8-82e3-45f2-be2c-f057e0cf4a9c",
                        displayName: "Materials Science & Engineering Database",
                        description: "专注材料性能与工艺",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Materials%20Science%20%26%20Engineering%20Database.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2FMGGgtYlilyoi7cHZx%2BSJ%2F4BssE%3D",
                        websiteUrl: "https://mse.engineering.cmu.edu",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "32d902a8-be7b-42fa-8470-c9df31bac9bb",
                        displayName: "ACM Digital Library",
                        description: "计算机协会资源，算法/AI领域权威",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/ACM%20Digital%20Library.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=xKmoa7N5FIeFDGP6Rz7%2FD2Zffcc%3D",
                        websiteUrl: "https://www.acm.org/publications/digital-library",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "6656b931-2cd1-494b-b386-7833cab0df9b",
                        displayName: "DOAJ",
                        description: "开源期刊库，含工程技术类OA期刊",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/DOAJ.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=gjcQO51e%2BnAVf9x8NmFIyFlp00M%3D",
                        websiteUrl: "https://doaj.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "4699cd20-7a40-4247-a924-ccd5492892aa",
                        displayName: "Engineering Village",
                        description: "工程技术领域的综合性检索工具",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/251e132978cc475fb350db5a50cb4abe.Engineering%20Village.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=KTvyMzRDcUCb0Dtdh8xWQ%2Blu2Ek%3D",
                        websiteUrl: "https://www.elsevier.cn/products/engineering-village/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "50a991d4-8372-43b6-906f-dc9b7f9c4c7f",
                        displayName: "Web of Science",
                        description: "获取自然科学领域最权威、最前沿的科研信息",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/c46956bcc3e94e1ebfc56293b5cef017.web-of-science.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=u3CdSROCc5yb6q0Q2nkhu2Y7QwA%3D",
                        websiteUrl: "https://www.webofscience.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "fbbe6f07-edd7-4e05-bbce-d7a9e8b0189f",
                        displayName: "Scopus",
                        description: "全球最大的同行评议学术论文摘要和引文数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/6377537e2af6423b8b2bb2fccb372314.scopus.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=sqjIY4qBaVtFigbqb5nkJjttl6M%3D",
                        websiteUrl: "https://www.scopus.com/home.uri",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "00bed980-cb03-403c-97d8-7d6f68941f2c",
                        displayName: "SpringerLink",
                        description: "综合性的在线学术资源平台",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/22f62a46ddff4b81ab1f9554d67ecea2.SpringerLink.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=ACjGIjd2BhdFEqJykuf3V%2BNIvB0%3D",
                        websiteUrl: "https://link.springer.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "f8b05aaa-6ab6-4b05-b8de-e8e759074312",
                        displayName: "ASME Digital Library",
                        description: "美国机械工程师学会资源",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/e93344cb101248c7aed68db56f954925.asme%201.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=EII6XmNIj7qs1fgQTngs1LkGyGE%3D",
                        websiteUrl: "https://asmedigitalcollection.asme.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "31ff858d-ce30-4453-8c72-77def690961f",
                        displayName: "ASCE Library",
                        description: "美国土木工程师学会全文库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/57040fca72cc4da5b13ac782e12b2475.ASCE%20Library.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=0%2FN%2FlXF%2FNnguwJyxmXBxcQUejGU%3D",
                        websiteUrl: "https://ascelibrary.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "3e87a6b1-f926-4fd3-b069-8650ec52d2ed",
                        displayName: "DBLP",
                        description: "计算机科学书目数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/2a1559fc95d04df1bf8ca91543356bc7.dblp.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Ik6MuuKoTyLg0KdGH41JJ2legP0%3D",
                        websiteUrl: "https://dblp.uni-trier.de",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "94a43c1c-e088-4ac4-a03c-bc7e1e48839e",
                        displayName: "CiteseerX",
                        description: "理论计算机科学、早期文献获取",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/cc837c29d77e4ea2a911f7c49c7dbe4f.citeseer.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=ksQB2n%2F8PsPnw%2BUBwjmeEZbOPbA%3D",
                        websiteUrl: "https://citeseerx.ist.psu.edu",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "56bc7bdd-a3bf-4a99-ab7c-2b47e737b059",
                        displayName: "SciFinder",
                        description: "全球最全化学物质/反应数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/20ad25dbaae747fa87a8ffec5831a5a7.SciFinder.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=5HQSlPlXz3uoeSf%2BocRol1OQK64%3D",
                        websiteUrl: "https://sso.cas.org/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "f6ea7c66-b0bf-417c-88cb-c0c1827fa6d6",
                        displayName: "Materials Project Documentation",
                        description: "免费计算材料数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/cb0a5504c0ae4779bd236e30d70ba143.Materials%20Project%20Documentation.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=ZJ9IDXFFRWuc04orVIf1t0AsOUY%3D",
                        websiteUrl: "https://next-gen.materialsproject.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "c409d406-8d7a-4961-b523-2a59c5b67cfe",
                        displayName: "ICE Virtual Library",
                        description: "英国土木工程师学会期刊",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/b5aef5e53ad94107b69871bdc8924967.ICE%20Virtual%20Library.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=HFXzXPPVhh40F0YBXFZTJLAw%2BLE%3D",
                        websiteUrl: "https://www.icevirtuallibrary.com",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "cbe8a570-19c5-469d-94d7-07637d31088e",
                displayName: "自然科学",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/42627c8912b245e0864e053f27560d51.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=u62oUrn39PJmyc8wjN18wmIK5Gs%3D",
                children: [],
                items: [
                    {
                        itemId: "bdf7aabd-d0f0-4d08-a3a9-0bbbb0b4dcab",
                        displayName: "Web of Science",
                        description: "获取自然科学领域最权威、最前沿的科研信息",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Web%20of%20Science.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=gs4QuP5OPgMmuodYvew2NjbmrP0%3D",
                        websiteUrl: "https://www.webofscience.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "b9350461-d33a-4a7b-a019-288763956c51",
                        displayName: "Engineering Village",
                        description: "工程技术领域的综合性检索工具",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Engineering%20Village.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=FsSIyBlycwGhQ3JEe0KvyrsajAA%3D",
                        websiteUrl: "https://www.elsevier.cn/products/engineering-village/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "934f215b-327b-4035-98d7-44a67e2f707a",
                        displayName: "PubMed",
                        description: "医学、生物学等相关领域研究人员获取文献的重要途径",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/58a1888c842349cd838383d542e9a6d2.PubMed.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=9n7ts%2F%2Fdqa5SB8koXs1X8Y8rLyw%3D",
                        websiteUrl: "https://pubmed.ncbi.nlm.nih.gov/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "a0d8a6d8-c8da-471a-8573-cdadbc8e2870",
                        displayName: "arXiv",
                        description: "全球最大的预印本平台之一，及时了解这些领域的最新研究动态和成果",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/arxiv.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=AOpOJuxkOiSQJNCqoYtqBNii5xE%3D",
                        websiteUrl: "http://arxiv.org/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "15595288-776b-494b-8c2a-5110e9998bfa",
                        displayName: "PubMed Central (PMC)",
                        description: "全球免费使用的生命科学期刊原始研究论文全文库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/PubMed%20Central%20%28PMC%29.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=n622FrtlIXWb5z8ubSB1q6LydA0%3D",
                        websiteUrl: "https://pmc.ncbi.nlm.nih.gov/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "4385a3f7-36c7-4fd7-ae74-680ea1270350",
                        displayName: "Elsevier",
                        description: "文献信息检索系统",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Elsevier.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=htx7t41BhBLBNebNNSp1i64fKjo%3D",
                        websiteUrl: "https://www.sciencedirect.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "8fa0910d-8b10-4966-9356-9bac93a3964c",
                        displayName: "Scopus",
                        description: "全球最大的同行评议学术论文摘要和引文数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/scopus.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=I41lkKK7o2PQcd9C4QgAcpwu6ho%3D",
                        websiteUrl: "https://www.scopus.com/home.uri",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "205279b8-f87b-491b-95c7-dfdde1631d5a",
                        displayName: "SpringerLink",
                        description: "综合性的在线学术资源平台",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/SpringerLink.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=5L5dO7SdnMiPyOJ%2Fgu%2BNVWTIFBU%3D",
                        websiteUrl: "https://link.springer.com",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    },
    {
        nodeId: "12741430-3c77-11f0-9b5b-bc24117649c5",
        displayName: "专利检索",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [
            {
                nodeId: "446304ed-2d47-4ac3-b7fc-1d714f5e1d79",
                displayName: "外国专利",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/64190ff59cbe48a39082f367612529c2.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=y28RICWAfN41DOy4%2BXqbOQKD8RA%3D",
                children: [],
                items: [
                    {
                        itemId: "f901ac8c-e139-405e-b8e3-8d7d5451010c",
                        displayName: "Patentscope（WIPO）",
                        description: "世界知识产权组织的数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/070ca2af496b4fc69eccd16a2c0b9012.Patentscope%EF%BC%88WIPO%EF%BC%89.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=izGrg4URx1XyHpcRNAB%2B7CLQSqc%3D",
                        websiteUrl: "https://patentscope.wipo.int",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "7adf9257-354e-4042-aa15-1d6cca529b6f",
                        displayName: "Espacenet",
                        description: "欧洲专利局数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Espacenet.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=eJUXvw6jbgBBuE4QI%2BuuEz97WY8%3D",
                        websiteUrl: "https://worldwide.espacenet.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "38587e4d-0188-44d4-95bf-92af816d4172",
                        displayName: "Google Patents",
                        description: "覆盖美、欧、WIPO 等的授权专利与公开申请",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/google%20patent.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=FH9Tmpcc5yFyggpqi3lb2pyKKUQ%3D",
                        websiteUrl: "https://www.google.com/patents",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "d0a5fdc6-58e7-4c22-9779-eb529dd2a354",
                        displayName: "USPTO",
                        description: "查美国专利，含全文、申请库及分类数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/uspto.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=2H9cyVg1ESezPt8cWAUfzKgdJog%3D",
                        websiteUrl: "https://www.uspto.gov/patents",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "2bcb0814-6cbe-414e-a103-5c12adf7b664",
                        displayName: "incoPat",
                        description: "支持多语言、多维度检索分析",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/incoPat.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2F3LK%2FrogEW47XdV3zh2MKtSlaqA%3D",
                        websiteUrl: "http://www.incopat.com",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "7dffc03b-8817-4b74-ad99-648e1d05a0f5",
                displayName: "中国专利",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/a212e4478b84498c954313b26af6c3d4.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=1aLLRjb8k3P053sGHEedOTcgXqQ%3D",
                children: [],
                items: [
                    {
                        itemId: "674a2c3b-7d0d-486b-8a3a-734049c1e984",
                        displayName: "中国专利公布公告",
                        description: "含 1985 年起中国全部专利信息",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E4%B8%93%E5%88%A9%E5%85%AC%E5%B8%83%E5%85%AC%E5%91%8A.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=eT15gwV0M9zJVmlFr%2ByZwIoSjs0%3D",
                        websiteUrl: "http://epub.cnipa.gov.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "7e76e71a-d838-41ec-82fe-fb3b3ff3b03e",
                        displayName: "国知局专利检索及分析",
                        description: "收录多国专利数据，有分析、生成报告功能",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%9B%BD%E7%9F%A5%E5%B1%80%E4%B8%93%E5%88%A9%E6%A3%80%E7%B4%A2%E5%8F%8A%E5%88%86%E6%9E%90.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=v4kcOuaChsU0UpP7CNE5NO1jdGE%3D",
                        websiteUrl: "https://pss-system.cponline.cnipa.gov.cn/conventionalSearch",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "c2ffa64d-6511-4ec9-b355-62404f2c10b7",
                        displayName: "专利信息服务平台",
                        description: "中国专利专业检索，可监控专利变化",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%93%E5%88%A9%E4%BF%A1%E6%81%AF%E6%9C%8D%E5%8A%A1%E5%B9%B3%E5%8F%B0.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=BaqW1fO3LwuH8tsv5Bla9u6t8GQ%3D",
                        websiteUrl: "http://search.cnipr.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "f85aecf8-6adb-413e-b880-53bfb52a0dfa",
                        displayName: "专利之星",
                        description: "含全球超 1 亿件专利数据",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%93%E5%88%A9%E4%B9%8B%E6%98%9F.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=M7oavh7aiVe0dER%2BMxWi0Hr6XL0%3D",
                        websiteUrl: "https://www.patentstar.com.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "93e94755-6529-4c8d-abaf-aa892e4424db",
                        displayName: "中国知网专利检索",
                        description: "集成关联文献、成果等，展现专利背景动态",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E7%9F%A5%E7%BD%91%E4%B8%93%E5%88%A9%E6%A3%80%E7%B4%A2.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=84sxxYerRZFJgkZSdEqcN1Y4df0%3D",
                        websiteUrl: "https://aipat.cnki.net",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    },
    {
        nodeId: "127a2288-3c77-11f0-9b5b-bc24117649c5",
        displayName: "期刊推荐",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [
            {
                nodeId: "44c996e0-eb0c-4773-a58d-290eff7befcf",
                displayName: "国际核心",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/d6ee1e56864849f099e8d29a130ed172.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2Fn92Py0FTP0Et7fWL5lktFi7PXI%3D",
                children: [],
                items: [
                    {
                        itemId: "1353e367-b91b-4db2-8b94-ffd4a2c50657",
                        displayName: "SCI《科学引文索引》/Science Citation Index",
                        description: "一个多学科的综合性大型引文数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/SCI%E3%80%8A%E7%A7%91%E5%AD%A6%E5%BC%95%E6%96%87%E7%B4%A2%E5%BC%95%E3%80%8B.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=S531dQBhvDv%2Byf4qfyq%2BM0ilbOo%3D",
                        websiteUrl: "https://clarivate.com/webofsciencegroup/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "980e2684-58d6-438d-9440-1de1f43f5255",
                        displayName: "EI《工程索引》/The Engineering Index",
                        description: "期刊包括全部工程学科和工程活动领域的研究成果",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/EI%E3%80%8A%E5%B7%A5%E7%A8%8B%E7%B4%A2%E5%BC%95%E3%80%8B.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=O1RsYn0HOyeVK%2Fv%2B0s0sJ0oToDg%3D",
                        websiteUrl: "https://www.engineeringvillage.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "bf13bee0-1f5c-40c8-8308-b046068a1672",
                        displayName: "SSCI《社会科学引文索引》/Social Sciences Citation Index",
                        description: "社会科学领域重要的引文索引数据库，也是 SCI 的姊妹索引",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/SSCI%E3%80%8A%E7%A4%BE%E4%BC%9A%E7%A7%91%E5%AD%A6%E5%BC%95%E6%96%87%E7%B4%A2%E5%BC%95%E3%80%8B.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=7gwk2QuLt14xZ%2BbwCibcQvaBFhY%3D",
                        websiteUrl: "https://clarivate.com/webofsciencegroup/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "89d98a7d-3c95-4a64-920f-188d182359f6",
                        displayName: "ISTP《科技会议录索引》/Index to Scientific & Technical Proceedings",
                        description: "检索全世界正式出版的会议文献的主要和权威工具",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/ISTP%E3%80%8A%E7%A7%91%E6%8A%80%E4%BC%9A%E8%AE%AE%E5%BD%95%E7%B4%A2%E5%BC%95%E3%80%8B.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=CKeBKUPeLX82Dxk3uKmJNzW0qMc%3D",
                        websiteUrl: "https://clarivate.com/webofsciencegroup/",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "c627b1e0-2510-4339-beb8-dab325ea7990",
                displayName: "国内核心",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/1b7fec58de3b44228c8180b9c6e23f6e.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=fXQL1WMJM%2Fy0TGZTh0xL%2B65U%2Bnw%3D",
                children: [],
                items: [
                    {
                        itemId: "f027c398-e9ea-421d-b203-c9f107efbeab",
                        displayName: "《中文核心期刊要目总览》",
                        description: "北京大学图书馆",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E3%80%8A%E4%B8%AD%E6%96%87%E6%A0%B8%E5%BF%83%E6%9C%9F%E5%88%8A%E8%A6%81%E7%9B%AE%E6%80%BB%E8%A7%88%E3%80%8B.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=i0wWlYD7rPD24EQZqVFg3EybPBQ%3D",
                        websiteUrl: "http://hxqk.lib.pku.edu.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "82f09f90-6f0f-4bd3-a5c0-e50c4128a7ac",
                        displayName: "中文社会科学索引（CSSCI）来源期刊",
                        description: "南京大学",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E6%96%87%E7%A4%BE%E4%BC%9A%E7%A7%91%E5%AD%A6%E8%8B%B1%E6%96%87%E7%B4%A2%E5%BC%95%EF%BC%88CSSCI%EF%BC%89%E6%9D%A5%E6%BA%90%E6%9C%9F%E5%88%8A.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=m%2Bixu5OGmJJIG6jorSpJETKL4SI%3D",
                        websiteUrl: "https://cssrac.nju.edu.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "639e3952-1f1b-47ca-9b3e-2c969d916200",
                        displayName: "中国科技论文统计源期刊/中国科技核心期刊",
                        description: "中国科学技术信息研究所",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E7%A7%91%E6%8A%80%E8%AE%BA%E6%96%87%E7%BB%9F%E8%AE%A1%E6%BA%90%E6%9C%9F%E5%88%8A_%E4%B8%AD%E5%9B%BD%E7%A7%91%E6%8A%80%E6%A0%B8%E5%BF%83%E6%9C%9F%E5%88%8A.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=3go09Vw%2FFqverA7e0srp7w0e7gI%3D",
                        websiteUrl: "http://www.istic.ac.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "3f83b173-87fc-4355-b227-f7b2023e1e8c",
                        displayName: "中国人文社会科学核心期刊",
                        description: "中国社会科学院文献信息中心",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%96%87%E7%A4%BE%E4%BC%9A%E7%A7%91%E5%AD%A6%E6%A0%B8%E5%BF%83%E6%9C%9F%E5%88%8A.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=hKETtmT1IJaZ4Qi1sEU9%2FHpLywI%3D",
                        websiteUrl: "http://www.lib.cass.org.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "5b213e6c-9706-4458-9997-4226d8e0d319",
                        displayName: "中国科学引文数据库(CSCD)来源期刊",
                        description: "中国科学院文献情报中心",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E5%BC%95%E6%96%87%E6%95%B0%E6%8D%AE%E5%BA%93%28CSCD%29%E6%9D%A5%E6%BA%90%E6%9C%9F%E5%88%8A.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=il%2F2e0GMJu2wNxdGJYj3umxAAMM%3D",
                        websiteUrl: "http://sciencechina.cn/cscd_source.jsp",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "6e1a6794-c779-42f9-bdeb-cf8ecc2ded75",
                        displayName: "中国核心期刊遴选数据库",
                        description: "万方数据股份有限公司",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E6%A0%B8%E5%BF%83%E6%9C%9F%E5%88%8A%E9%81%B4%E9%80%89%E6%95%B0%E6%8D%AE%E5%BA%93.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=nUavp7J%2Fxx8%2BcNvBvQMm%2BYv33O4%3D",
                        websiteUrl: "https://c.wanfangdata.com.cn/periodical",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    },
    {
        nodeId: "127a2288-3c77-11f0-9b5b-bc24117649c6",
        displayName: "期刊检索",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [
            {
                itemId: "15a2b456-90e5-40ed-8c6f-91a1fb74458d",
                displayName: "中国学术期刊",
                description: "知网期刊检索入口",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E5%AD%A6%E6%9C%AF%E6%9C%9F%E5%88%8A.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=PU2Ass2fzooGLSHEjgeeX94sOZQ%3D",
                websiteUrl: "https://cajn.cnki.net/cajn/",
                redirectType: "DETAIL"
            },
            {
                itemId: "6240dab8-2260-44e5-b521-cf8124cba9f1",
                displayName: "Elsevier",
                description: "文献/期刊信息检索系统",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Elsevier.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=htx7t41BhBLBNebNNSp1i64fKjo%3D",
                websiteUrl: "https://www.sciencedirect.com/",
                redirectType: "DETAIL"
            },
            {
                itemId: "1fd3139e-cbb0-4c96-8823-43860954e384",
                displayName: "核心期刊查询",
                description: "期刊核心资质检索",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E6%A0%B8%E5%BF%83%E6%9C%9F%E5%88%8A%E6%9F%A5%E8%AF%A2.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=YQZfOdvPbVM6qxKXmmhWvxr57C8%3D",
                websiteUrl: "http://corejournal.lib.sjtu.edu.cn",
                redirectType: "DETAIL"
            },
            {
                itemId: "9a59911c-ba0c-4200-b93a-82beaf8c3a74",
                displayName: "MedSci",
                description: "医学科研服务平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/MedSci.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=rovA5CPioQl947hqYTGAdjp5ax4%3D",
                websiteUrl: "https://www.medsci.cn/sci/index.do",
                redirectType: "DETAIL"
            },
            {
                itemId: "a6ac8c9a-8ebc-48bf-9aa8-ed3474e44b11",
                displayName: "北大期刊网",
                description: "中文核心期刊查询",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%8C%97%E5%A4%A7%E6%9C%9F%E5%88%8A%E7%BD%91.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=FDusGCYqck5cfrWxOvlmRjrlLSo%3D",
                websiteUrl: "https://ccj.pku.edu.cn",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "1220200a-3c77-11f0-9b5b-bc24117649c4",
        displayName: "写作翻译",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [
            {
                itemId: "e23c0fe2-ec4d-43c7-8806-995fe038e9eb",
                displayName: "知网翻译",
                description: "提供规范的学术表达",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%9F%A5%E7%BD%91%E7%BF%BB%E8%AF%91.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=gZgOCjC7hjDbxoiYOgL2Ofq16x8%3D",
                websiteUrl: "https://dict.cnki.net/index",
                redirectType: "DETAIL"
            },
            {
                itemId: "873ff787-1988-45a7-9ce3-f366024ef856",
                displayName: "有道翻译",
                description: "多场景智能翻译平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E6%9C%89%E9%81%93%E7%BF%BB%E8%AF%91.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=yLNvLD94YZWQVBLTvMbra3ieqBQ%3D",
                websiteUrl: "https://fanyi.youdao.com/#/AITranslate",
                redirectType: "DETAIL"
            },
            {
                itemId: "9c076aab-9a6a-487f-a42f-0821337e59d4",
                displayName: "百度翻译",
                description: "免费在线翻译工具",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%99%BE%E5%BA%A6%E7%BF%BB%E8%AF%91.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=qO1KAeT0XpqHLkM1%2FPKMKJa5zdw%3D",
                websiteUrl: "https://fanyi.baidu.com/mtpe-individual/multimodal#/",
                redirectType: "DETAIL"
            },
            {
                itemId: "9a148960-d08f-473a-9d11-0ccfddec2c66",
                displayName: "DeepL",
                description: "精准翻译，支持多语种",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/DeepL.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=7x5K8ZbMYXs7I4rC%2FY%2FhXcMmxo8%3D",
                websiteUrl: "https://www.deepl.com/zh/translator",
                redirectType: "DETAIL"
            },
            {
                itemId: "17a8586b-063c-4b6e-9966-f7a8f94fabc4",
                displayName: "知云文献翻译",
                description: "多引擎切换",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%9F%A5%E4%BA%91%E6%96%87%E7%8C%AE%E7%BF%BB%E8%AF%91.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Ekv8HjeQXmHBfe%2BSFjj3qbulBVM%3D",
                websiteUrl: "https://www.zhiyunwenxian.cn",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "128136a1-3c77-11f0-9b5b-bc24117649c5",
        displayName: "文献管理",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [
            {
                itemId: "eef36b0d-d730-4a7b-89a9-6e6442006684",
                displayName: "NoteExpress",
                description: "论文写作时的参考文献管理",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/noteexpress.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=7h1SDYjHQdu2OGxJJ7EF%2BrcpT0g%3D",
                websiteUrl: "https://jc.inoteexpress.com/dynamo/index.html",
                redirectType: "DETAIL"
            },
            {
                itemId: "6d01137c-e654-4fe7-bc39-68343cdf3a1b",
                displayName: "Mendeley",
                description: "有强大的 PDF 识别和搜索功能",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Mendeley.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=AIS9MYV9MFDHk07KStHtwcjaK48%3D",
                websiteUrl: "https://www.mendeley.com",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "12898852-3c77-11f0-9b5b-bc24117649c5",
        displayName: "论文查重",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [
            {
                nodeId: "c8fe8e32-f4de-4d1f-af7a-5ccae32039d8",
                displayName: "科研/期刊论文查重",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/291eabbc566e486eb1c68bb001b8366b.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=fvVu9DMpr0%2F360VDzCv%2Fa3Y4tLs%3D",
                children: [],
                items: [
                    {
                        itemId: "156ec0d4-7f37-4e44-890d-1df980f6d8cf",
                        displayName: "paperyy",
                        description: "免费初稿，智能降重辅助",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/paperyy.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=I3LTspdkyhpwaqHLKKoZyDXMyzI%3D",
                        websiteUrl: "https://www.paperyy.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "dd9a7471-2490-4abc-b2a2-81a1b0656aca",
                        displayName: "iThenticate",
                        description: "国际论文查重，防抄袭",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/iThenticate.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=aV6t4LnTzMf363n2DEjQbWbU74g%3D",
                        websiteUrl: "https://www.ithenticatecn.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "45e96f57-7350-451c-a594-7c6b2c5382be",
                        displayName: "Cross Check",
                        description: "国际上最权威的英文论文查重工具",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/crosscheck.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=pWRI96nyjLbWYfc5UX%2BsiSNOPC4%3D",
                        websiteUrl: "https://www.crosscheckcn.com",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "27c705c4-c627-4874-90f2-eefdeabf8512",
                displayName: "学位论文查重",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/2f9a0eee01034bb7b315e57577c43b9b.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=VNgHDu4gkWmOwAwo%2BDgHSHBYJVk%3D",
                children: [],
                items: [
                    {
                        itemId: "b6afca4c-2e25-4571-9014-00c43501f0f4",
                        displayName: "万方查重",
                        description: "数据全，侧重中文文献",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%87%E6%96%B9%E6%9F%A5%E9%87%8D.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=rR%2FrJSW%2FmT7x6nE8Mirx7dg%2FAPM%3D",
                        websiteUrl: "https://check.wanfangdata.com.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "1e707b83-3a63-442a-ba47-0d83dbda4d29",
                        displayName: "维普论文查重",
                        description: "算法严，高校常用",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%BB%B4%E6%99%AE.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Mg5EXQ%2BwyfysBRkSwTkUKMbVoqc%3D",
                        websiteUrl: "https://vpcs.fanyu.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "073b1426-f68a-4b00-a859-1d975fe94bfd",
                        displayName: "学信网查重",
                        description: "权威，本科 / 硕博适用",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%AD%A6%E4%BF%A1%E7%BD%91%E6%9F%A5%E9%87%8D.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=kmZPeLFy0XAoLwlv8%2BR9tExcO%2FQ%3D",
                        websiteUrl: "https://chsi.wanfangtech.net",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "8443131a-2fb5-49d5-b97a-41165875b325",
                        displayName: "知网查重",
                        description: "高校定稿首选，数据库全",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%9F%A5%E7%BD%91%E6%9F%A5%E9%87%8D.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=xEQkbrNGRvDz%2BAAxuQw4I7N6kng%3D",
                        websiteUrl: "https://cx.cnki.net/#/login",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    },
    {
        nodeId: "1220200a-3c77-21f0-9b5b-bc24117649c5",
        displayName: "数据分析",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [
            {
                itemId: "f4651d4e-f601-49b9-beb8-2ecf1b9bae8a",
                displayName: "SPSSPRO",
                description: "国产免费在线数据分析平台，一键自动化建模分析、生成报告",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/SPSSPRO%201.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=K8VmgYjTH%2F6TMBF7qxE5tBRG2t8%3D",
                websiteUrl: "https://www.spsspro.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "0a658d06-14b7-4657-b217-f0b98a259629",
                displayName: "Tableau",
                description: "一个可视化数据分析平台，帮助每个人做出数据驱动型决策",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/tableau.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=S5VCxCEmQLS93CR8K0gGt5qa7fk%3D",
                websiteUrl: "https://www.tableau.com/zh-cn",
                redirectType: "DETAIL"
            },
            {
                itemId: "b1d7b85d-5e04-466b-bdb1-72c17abeef2f",
                displayName: "ChatExcel",
                description: "通过AI聊天，实现Excel处理和数据分析",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/ChatExcel.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=IytYRF6Jw7OzxKsbKaq1lmeEL6o%3D",
                websiteUrl: "https://chatexcel.com/#/",
                redirectType: "DETAIL"
            },
            {
                itemId: "63e0d07e-89fc-4552-910a-a59f5aaaefe2",
                displayName: "Image-Pro",
                description: "一款用于科学图像处理和分析的软件，适用于2D和3D的图像处理、增强和分析",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Image-Pro.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=DqFMgE%2FKGn1VxykYkc%2BjglZFZ2s%3D",
                websiteUrl: "https://www.meyerinst.com/brand/mediacybernetics/image-pro-v11/",
                redirectType: "DETAIL"
            },
            {
                itemId: "764657d6-5479-4d92-83bc-f6a6ca1bff0b",
                displayName: "GetData",
                description: "一款专业的图形数字化软件，支持从多种图形格式（如TIFF、JPEG等）中提取数据",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/getdata.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=HXwdb5oDlY4iN%2B%2FU5xpZt4%2FWx%2Fw%3D",
                websiteUrl: "https://getdata.com",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "1290200a-3c77-11f0-9b5b-bc24117649c5",
        displayName: "科研绘图",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [
            {
                itemId: "7b13485d-595a-4353-adbd-752a5791445a",
                displayName: "Origin",
                description: "一款适用于各种专业模式的数据绘图及分析软件",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/origin.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=I3iPbwitUdNKZlyyK6wxyojXXQE%3D",
                websiteUrl: "https://www.originlab.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "8bf98526-ec7b-499b-987c-f2100b77c3a6",
                displayName: "Adobe Illustrator",
                description: "矢量图绘制软件，适用于三维结构示意图绘制、数据图排版和细节调整",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/adobeillustrator.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=V3gVUAi2u5N%2BBq5vNUsHGcyoxKk%3D",
                websiteUrl: "https://www.adobe.com/products/illustrator.html",
                redirectType: "DETAIL"
            },
            {
                itemId: "c28c35fa-b6c4-429e-8fbb-abebc9cc2a42",
                displayName: "Inkscape",
                description: "免费的矢量图形设计软件，适用于科学图表和插图制作",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/inkscape.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=m4qiTaQmCSkjTQDpJnKRdxia%2BH8%3D",
                websiteUrl: "https://inkscape.org/zh-hans/",
                redirectType: "DETAIL"
            },
            {
                itemId: "c657f060-66d3-46eb-98a6-1d566970dd9e",
                displayName: "Blender",
                description: "一款开源的3D插图软件，适用于科研模型绘制",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Blender.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=2VVoHJdxqnn2pN%2FIYDWMEjLGzgs%3D",
                websiteUrl: "https://www.blender.org",
                redirectType: "DETAIL"
            },
            {
                itemId: "f72ac387-c273-47f5-87fa-9ca6da8dbd51",
                displayName: "Mind the Graph",
                description: "一个用户自己DIY制作插图的平台，涵盖80多种学科素材，适用于新手",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Mind%20the%20Graph.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=6DuLuRGe33M%2FTyS2NpjCfC%2B%2FHkQ%3D",
                websiteUrl: "https://www.mindthegraph.cn",
                redirectType: "DETAIL"
            },
            {
                itemId: "b92cd9f5-be36-4506-935a-10f8fff2f874",
                displayName: "GMT",
                description: "地球科学领域使用最广泛的制图软件之一，具有强大的绘图功能和数据处理功能",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/GMT.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=GG%2BhBdHp9CctEjbyBwcp4p%2B0ELI%3D",
                websiteUrl: "https://docs.gmt-china.org/latest/",
                redirectType: "DETAIL"
            },
            {
                itemId: "bfb76955-39b7-4d96-bc5a-0de8cc0cad06",
                displayName: "BioRender",
                description: "生命科学领域的在线插图工具，提供了海量的图标和模板库",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/BioRender.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=dA3grJyPvrWbtW%2BGzGgVF0g%2FyY8%3D",
                websiteUrl: "https://www.biorender.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "07d6ebab-3a6d-4b59-9c58-449a83bc3b23",
                displayName: "ChemDraw",
                description: "化工及生物医药领域的强大科研绘图工具,能够快速、准确地绘制化学结构式和生物分子图形",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/ChemDraw.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=ML1jw%2FX5%2B%2FHGuQM15P8ROwHzFbA%3D",
                websiteUrl: "https://www.chemdraw.com.cn",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "1220200a-3c27-21f0-9b5b-bc24117649d5",
        displayName: "基金项目",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [
            {
                itemId: "27a8c518-e274-4ee1-ab72-d39f713fa58f",
                displayName: "自然科学基金委",
                description: "国家自然科学基金委员会",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%9B%BD%E5%AE%B6%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%A6%E5%9F%BA%E9%87%91.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=F52YYe6HGFtFwdtB91%2FLhkqGjk0%3D",
                websiteUrl: "https://www.nsfc.gov.cn",
                redirectType: "DETAIL"
            },
            {
                itemId: "255fc2af-6f26-4671-88d5-0f4c1ba51e14",
                displayName: "科学网基金",
                description: "支持所有学科类别的项目查询及立项项目的快捷检索",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%A7%91%E5%AD%A6%E7%BD%91%E5%9F%BA%E9%87%91.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=XyKpJSkbFvSdntYV3fergP3ru9c%3D",
                websiteUrl: "https://fund.sciencenet.cn",
                redirectType: "DETAIL"
            },
            {
                itemId: "4fac11d2-3d8f-4119-8868-39c83fd03941",
                displayName: "青塔｜自科云",
                description: "全球科研基金项目在线查询",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E9%9D%92%E5%A1%94.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=LVhZ9DKo9pIZ32hJGvHa1yk6E40%3D",
                websiteUrl: "https://fund.cingta.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "1a11248e-8213-4372-96c8-631d2db0c7dc",
                displayName: "国家社科基金项目数据库",
                description: "社科类项目查询",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%9B%BD%E5%AE%B6%E7%A4%BE%E7%A7%91%E5%9F%BA%E9%87%91%E9%A1%B9%E7%9B%AE%E6%95%B0%E6%8D%AE%E5%BA%93.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=0sgLYvLcrJitviuLnB0%2BqEkQ5cY%3D",
                websiteUrl: "http://fz.people.com.cn/skygb/sk/index.php/Index/index",
                redirectType: "DETAIL"
            },
            {
                itemId: "664b28c5-5c3a-4d5c-92d0-4815fa634ce6",
                displayName: "MedSci（梅斯医学）“全球基金查询”",
                description: "聚焦医学健康研究项目，实时更新",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/MedSci%EF%BC%88%E6%A2%85%E6%96%AF%E5%8C%BB%E5%AD%A6%EF%BC%89%E2%80%9C%E5%85%A8%E7%90%83%E5%9F%BA%E9%87%91%E6%9F%A5%E8%AF%A2%E2%80%9D.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=cFIGj717jVrgJUOgwmVF6oWwn%2BY%3D",
                websiteUrl: "https://www.medsci.cn/sci/nsfc_index",
                redirectType: "DETAIL"
            },
            {
                itemId: "947c1432-e18f-4006-b87b-d71b88808d97",
                displayName: "ZCOOL国家自然科学基金查询",
                description: "提供部分学科的科研基金项目在线查询服务",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/zcool.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=RXB9NebxN5DrjXX%2FGDQ7pSk5hbo%3D",
                websiteUrl: "http://fund.keyanzhiku.com",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "1240200a-3c27-21f0-9b5b-bc24117649d5",
        displayName: "科研社区",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [
            {
                itemId: "074ad74c-817a-4663-9234-7423be88aa72",
                displayName: "ResearchGate",
                description: "一个为科研人员设计的社交网络平台，“科学界的Facebook”",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/researchgate.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=52moqCVn1%2BOGuDBBzC%2Fl1tnuGUY%3D",
                websiteUrl: "https://www.researchgate.net",
                redirectType: "DETAIL"
            },
            {
                itemId: "f259ced2-eb4f-4e93-a5b6-094a52a11f26",
                displayName: "LinkedIn",
                description: "为科研人员提供了展示研究成果、寻找学术合作、了解学术动态的平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/LinkedIn.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=251QY%2FhygLxHy7841oFfkMldRrI%3D",
                websiteUrl: "https://www.linkedin.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "05532fec-7f58-45c5-bb55-953a68685f0e",
                displayName: "Academia",
                description: "专注于学术交流和科研论文分享的学术型社交网站",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Academia.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=avKBBn8urI1BAnkcwEVAA8IeM4E%3D",
                websiteUrl: "https://www.academia.edu",
                redirectType: "DETAIL"
            },
            {
                itemId: "61fea3ca-e564-4a9c-a0fa-2267dae2954f",
                displayName: "LabRoots",
                description: "可实现虚拟可视化交流",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/labroots.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=u6qCWXW7O0SPXoRCqQe0ptvkl3o%3D",
                websiteUrl: "https://www.labroots.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "f28d95f9-acc0-4b2c-940a-47ea9bac9a71",
                displayName: "GitHub",
                description: "科研代码向交流平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/github.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=EHjXbX%2FBi0tQv5pPRgaC7CPBv%2FM%3D",
                websiteUrl: "https://github.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "c0a3e97e-569d-4fb5-942b-8f16c354f416",
                displayName: "小木虫",
                description: "国内学术科研互动平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%B0%8F%E6%9C%A8%E8%99%AB.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2B7g8DbSgNMYgYrqWI9cmiDLK8i0%3D",
                websiteUrl: "https://muchong.com/bbs/",
                redirectType: "DETAIL"
            },
            {
                itemId: "72f3bcb3-f1b3-4dcd-b1c7-afbc63e73de8",
                displayName: "经管之家",
                description: "国内最大的“中国经济学”学术交流平台。",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%BB%8F%E7%AE%A1%E4%B9%8B%E5%AE%B6.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=sv6tPqHtfG7iemy4nlXmdog880Y%3D",
                websiteUrl: "https://bbs.pinggu.org",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "1240200a-3c27-21f0-9b5b-bc24117649d56",
        displayName: "预印平台",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [
            {
                itemId: "f3e4ec2a-a3a1-4994-93e5-03b51ac29f8c",
                displayName: "arXiv",
                description: "全球最大的预印本平台之一",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/03cffa30151e48c8b5bba2729e67df2f.arxiv.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=J8fa%2FWj%2F42Q0XEASxNwUW%2B7XM0M%3D",
                websiteUrl: "http://arxiv.org/",
                redirectType: "DETAIL"
            },
            {
                itemId: "9eb1800a-9453-42a2-b345-265ff28e1a19",
                displayName: "bioRxiv",
                description: "生命科学预印本平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/3e627ddd76a14f70bac66a62e881aec5.bioRxiv.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=nnta%2BO6HW1FzMNCFsfSYqZnWLEU%3D",
                websiteUrl: "https://connect.biorxiv.org/relate/content/181",
                redirectType: "DETAIL"
            },
            {
                itemId: "593c6308-4e8f-40c8-a79b-fdeed613aabe",
                displayName: "ChemRxiv",
                description: "化学领域预印本平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/04dd17d2117045a7b53001719a1de998.ChemRxiv.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=e2W97ahwp2tdKiYSIcv42CPq3H4%3D",
                websiteUrl: "https://chemrxiv.org/",
                redirectType: "DETAIL"
            },
            {
                itemId: "85bbfdd7-dc6f-455b-a7f7-611cfd60f1f4",
                displayName: "SSRN ",
                description: " 社会科学和人文学科最重要的预印本平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/ef08f6aca2ac4f68bad065de4e149abe.SSRN.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=OnqUAdPe5XmXPIWfjx83ErBMpWY%3D",
                websiteUrl: "https://www.elsevier.com/products/ssrn-preprint-services/research-networks",
                redirectType: "DETAIL"
            },
            {
                itemId: "1cd97e95-419d-4160-adae-0922b103aba0",
                displayName: "Preprints.org",
                description: "多学科预印本服务平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/5d302bcea0a8452b9850c1d626a4e606.Preprints.org.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=xspN2veZKS9i%2Fonv9grNmmIQOuQ%3D",
                websiteUrl: "https://preprints.org/",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "1240200a-3c27-21f0-9b5b-bc24117649d57",
        displayName: "编程辅助",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [
            {
                nodeId: "f827b175-6c22-4d7c-84c1-7a62479f3041",
                displayName: "代码阅读",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/cf46d671b7764d84b23edfc1eac17850.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=TsP8Q2WNd6kZJrGD9J5QcTRvOHc%3D",
                children: [],
                items: [
                    {
                        itemId: "9c6c8292-8782-4d73-9bdb-895c0b7cd054",
                        displayName: "OpenGrok",
                        description: "一款免费、开源、功能强大、运行流畅的代码阅读器",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/b08ef51a287344369c61f46ec01cf521.OpenGrok.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=r4tSzN4jusCgEntpuFGuBZzAX8w%3D",
                        websiteUrl: "https://github.com/oracle/opengrok",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "1fa1a3dc-fa46-4231-a5fb-ad2a1e12ae1d",
                        displayName: "Sourcetrail",
                        description: "开源免费的源码阅读神器 Sourcetrail，高效阅读python，pytorch等深度学习框架代码",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/b5f53e8f808f4cecbeb537df9ec608c4.Sourcetrail.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=WjbS5meOC%2BvHVUBBw1sZMWf7bmU%3D",
                        websiteUrl: "https://www.sourcetrail.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "e94f6fa5-5e58-4481-8d13-d2e234e265cc",
                        displayName: "Scitools Understand",
                        description: "静态代码分析神器",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/e5c5a08220744fb29a4bcf0f282dc870.Scitools%20Understand.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=2XtGtyWYbcmAqk8B%2BX65JDia6A0%3D",
                        websiteUrl: "https://scitools.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "6e2c09de-83ff-4f8d-97d4-37524e5fdea2",
                        displayName: "Source Insight",
                        description: "一款用于代码阅读和管理的软件工具。",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/53e2cbefef3340239177954efb522f93.source%20insight.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=YDFw7Xjy%2BMTPJ7ZUCHxy0%2FuoeSE%3D",
                        websiteUrl: "https://www.sourceinsight.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "ad93db13-0d7a-41fa-85e9-6c9880f6edf0",
                        displayName: "Codemap",
                        description: "一款辅助阅读源代码、分析项目结构的工具",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/8df489dd6b854f96af591858f534a869.codemap.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=bTuakkIWvT8wAnTQHwekmjM8ETQ%3D",
                        websiteUrl: "https://www.codemap.info/index.html",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "3a718ee9-61da-4ec5-95ed-bbceeea993be",
                displayName: "代码编写",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/a3e5ece0966b49b287904a929e8bffdd.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Y1RedxWJrNpRDb49q347i6jf1%2Fs%3D",
                children: [],
                items: [
                    {
                        itemId: "70fca86b-1838-4456-94cd-52e3dc3067b8",
                        displayName: "Codeium Windsurf",
                        description: "Codeium 公司推出的最新一代 AI 辅助引擎/模型",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/c50565d3e4ad4cc9979fc7816d18153b.Codeium%20Windsurf.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=MeleucYxvxg%2BtepEC1WPp25RXAA%3D",
                        websiteUrl: "https://windsurf.com/editor",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "f2bc16b6-c15b-4f5a-9b00-c3a960db0359",
                        displayName: "cursor",
                        description: "从零开始构建的现代化AI集成IDE",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/8fce08380b4c4454a3359f222d9678f1.Cursor.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=KNM8MEarIap6mSaiGFITUqwEqh4%3D",
                        websiteUrl: "https://www.cursor.com/ja",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "de08ec5e-a829-4ac2-801e-89c916c8cee1",
                        displayName: "Trace IDE",
                        description: "功能丰富的AI驱动IDE，集成Claude 3.5和GPT-4",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/93fa4947366d43d9aab2384a07291442.Trace%20IDE.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=5EZtpy09YZM1aLerrp%2FZm%2FoZyQk%3D",
                        websiteUrl: "https://traeide.com/zh",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "4416d792-06fd-49a1-952c-024b2a8cb504",
                        displayName: "Amazon CodeWhisperer",
                        description: "适用于软件开发的最强大的生成式人工智能助手",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/5ac6531ca0b64022b9006e743d231500.Amazon%20CodeWhisperer.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=o%2FMQgEwAPcyfFV29UHgINC%2BE36o%3D",
                        websiteUrl: "https://aws.amazon.com/cn/q/developer/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "c711e134-2d64-4d85-b0e6-9c5275d8545f",
                        displayName: "GitHub Copilot",
                        description: "GitHub 和 OpenAI 联手打造的人工智能编程助手",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/4d0f3506883e47a8ae52d2049e2a99b2.GitHub%20Copilot.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=8R6vIxQuTFoa5XaIeijDinGJ%2Bac%3D",
                        websiteUrl: "https://github.com/features/copilot",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    }
];

export default menuNodes;