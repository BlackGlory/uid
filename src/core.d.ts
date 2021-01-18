interface ICore {
  metrics(): {
    memoryUsage: NodeJS.MemoryUsage
    cpuUsage: NodeJS.CpuUsage
    resourceUsage: NodeJS.ResourceUsage
  }

  Nanoid: {
    generate(): string
  }

  UUID: {
    generate(): string
  }
}
