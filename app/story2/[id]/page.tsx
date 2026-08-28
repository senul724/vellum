import { getStoryById } from "@/components/story/mockStoryData";
import { RetroScrollStoryPlayer } from "@/components/story/RetroScrollStoryPlayer";

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function Story2Page({ params }: PageProps) {
	const resolvedParams = await params;
	const storyId = resolvedParams.id;
	const storyData = getStoryById(storyId);

	return <RetroScrollStoryPlayer story={storyData} />;
}
