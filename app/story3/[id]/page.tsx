import { getStoryById } from "@/components/story/mockStoryData";
import { InstaStoryPlayer } from "@/components/story/InstaStoryPlayer";

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function Story3Page({ params }: PageProps) {
	const resolvedParams = await params;
	const storyId = resolvedParams.id;
	const storyData = getStoryById(storyId);

	return <InstaStoryPlayer story={storyData} />;
}
