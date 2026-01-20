import { useState, useEffect, useCallback } from 'react';
import type { SnapshotMetadata, LoadedSnapshot } from '../types';
import { loadMetadata, fetchSnapshotData } from '../utils/api';

interface UseCycloneDataResult {
  metadata: SnapshotMetadata[];
  currentSnapshot: LoadedSnapshot | null;
  currentMetadata: SnapshotMetadata | null;
  isLoading: boolean;
  loadingMessage: string;
  error: string | null;
  loadSnapshot: (index: number) => Promise<void>;
}

export function useCycloneData(): UseCycloneDataResult {
  const [metadata, setMetadata] = useState<SnapshotMetadata[]>([]);
  const [currentSnapshot, setCurrentSnapshot] = useState<LoadedSnapshot | null>(null);
  const [currentMetadata, setCurrentMetadata] = useState<SnapshotMetadata | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState('Loading metadata...');
  const [error, setError] = useState<string | null>(null);

  // Load initial metadata
  useEffect(() => {
    let mounted = true;

    async function init() {
      try {
        setLoadingMessage('Loading metadata...');
        const data = await loadMetadata();

        if (!mounted) return;

        setMetadata(data);

        // Load first snapshot
        if (data.length > 0) {
          setLoadingMessage('Loading first snapshot...');
          const snapshot = await fetchSnapshotData(data[0]);
          if (!mounted) return;
          setCurrentSnapshot(snapshot);
          setCurrentMetadata(data[0]);
        }

        setIsLoading(false);
      } catch (err) {
        if (!mounted) return;
        setError(err instanceof Error ? err.message : 'Unknown error');
        setIsLoading(false);
      }
    }

    init();

    return () => {
      mounted = false;
    };
  }, []);

  const loadSnapshot = useCallback(async (index: number) => {
    if (index < 0 || index >= metadata.length) return;

    const meta = metadata[index];
    setCurrentMetadata(meta);

    try {
      const snapshot = await fetchSnapshotData(meta);
      setCurrentSnapshot(snapshot);
    } catch (err) {
      console.error('Error loading snapshot:', err);
    }
  }, [metadata]);

  return {
    metadata,
    currentSnapshot,
    currentMetadata,
    isLoading,
    loadingMessage,
    error,
    loadSnapshot,
  };
}
