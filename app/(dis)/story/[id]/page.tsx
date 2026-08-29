import { getStoryById } from "@/components/story/mockStoryData";
import { StoryPlayer } from "@/components/story/StoryPlayer";

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function StoryPage({ params }: PageProps) {
	const resolvedParams = await params;
	const storyId = resolvedParams.id;
	const storyData = getStoryById(storyId);

	return <StoryPlayer story={storyData} />;
}
