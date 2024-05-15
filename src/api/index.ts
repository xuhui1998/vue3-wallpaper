import axios from "axios"
import { WallpaperListData, CategoryDetailListProps } from '@/types'

export interface WallpaperListParams {
	count: number;
	pageno: number;
}

interface CategoryDetailProps {
	count: number;
	pageno: number;
	/** 分类id */
	cids: string;
}

// 首页360推荐壁纸列表
export const wallpaperList = (params: WallpaperListParams) => {
	return axios.get<WallpaperListData>("/intf/newestList", { params })
}

// 获取360壁纸所有类目
export const wallpaperSort = () => {
	return axios.get("/intf/getCategory")
}

// 获取360类目详情
export const wallpaperSortDetail = (params: CategoryDetailProps) => {
	return axios.get<CategoryDetailListProps>("/intf/GetListByCategory", { params })
}

// 360壁纸搜索
export const searchWallpaper = (params) => {
	return axios.get("/intf/search", { params })
}