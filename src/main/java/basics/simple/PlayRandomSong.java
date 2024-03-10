package basics.simple;

import java.util.*;
import java.util.stream.Collectors;

public class PlayRandomSong {
    public static void main(String[] args) {
        int playList = 4;
        List<Integer> songList = new ArrayList<>();
        songList.addAll(Arrays.asList(2, 3, 5, 2, 4, 6, 78, 5, 7, 5, 3, 23, 5, 7, 4, 3, 5, 7, 8, 54, 3));
        while (playList > 0) {
            System.out.println(randomSongList(songList));
            playList--;
        }
    }

    public static List<Integer> randomSongList(List<Integer> songList) {
        Random random = new Random();
        Set<Integer> songsSet = songList.stream().collect(Collectors.toSet());
        List<Integer> songOrder = new ArrayList<>();

        while (songOrder.size() < songsSet.size()) {
            int songID = random.nextInt(1, 10000) % songsSet.size();
            if (!songOrder.contains(songID)) {
                songOrder.add(songID);
            }
        }
        return songOrder;
    }
}
